import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { Octokit } from "@octokit/rest";
import * as octokitTypes from "@octokit/types";
import dayjs from "dayjs";
import fs from "fs";
import millify from "millify";
import slugify from "slugify";

import firstissue from "./firstissue.json";
import { Repository, Tag } from "./types";

// Setup Octokit (GitHub API client)
const MyOctokit = Octokit.plugin(throttling, retry);
const octokit = new MyOctokit({
  auth: process.env.GH_PERSONAL_ACCESS_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: octokitTypes.RequestOptions) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

      // Retry twice after hitting a rate limit error, then give up
      if (options.request?.retryCount <= 2) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onSecondaryRateLimit: (
      _retryAfter: number,
      options: octokitTypes.RequestOptions,
      octokit: { log: { warn: (arg0: string) => void } }
    ) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Secondary quota detected for request ${options.method} ${options.url}`);
    }
  }
});

// Script entry point
let processedRepositories = 0;
let invalidRepositories: Array<string> = [];
const slugReplacements = [
  { symbol: "#", slug: "sharp" },
  { symbol: "+", slug: "plus" }
];
const issueLimit = 10;

// Take only the first 10 repositories in development otherwise we make GitHub unhappy
firstissue.repositories
  .slice(0, process.env.NODE_ENV === "development" ? 30 : firstissue.repositories.length)
  .reduce<Promise<Repository[]>>(async (repositoryList, r: string, i) => {
    // Wait 1s between each request to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000 * i));

    const [owner, repo] = r.split("/");
    const { data: repositoryData } = await octokit.repos.get({ owner, repo });

    console.log(
      `Processing repository: ${processedRepositories++} of ${
        process.env.NODE_ENV === "development" ? 30 : firstissue.repositories.length
      }: ${r}`
    );

    // Skip repos that are archived, disabled, private, or have no language, or have less than 100 stars,
    // or have less than 3 open issues or haven't been updated in the last 6 months
    if (
      repositoryData.archived ||
      repositoryData.disabled ||
      repositoryData.private ||
      !repositoryData.language ||
      repositoryData.stargazers_count < 100 ||
      repositoryData.open_issues_count < 3 ||
      dayjs().diff(dayjs(repositoryData.pushed_at), "month") > 6
    ) {
      console.log(`Skipping repository: ${owner}/${repo}`);
      // Not the best way to do this, but it works
      invalidRepositories = [...invalidRepositories, r];
      return repositoryList;
    }

    // Promise<any> is a hack to get around the very complicated type of octokit.issues.listForRepo
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const issuesData = await firstissue.labels.reduce<Promise<any>>(
      async (issuesList, label: string) => {
        const { data } = await octokit.issues.listForRepo({
          owner,
          repo,
          labels: label,
          state: "open",
          sort: "created",
          direction: "desc",
          per_page: issueLimit
        });
        return [...(await issuesList), ...data];
      },
      Promise.resolve([])
    );

    // Skip repos that have no issues with the labels we want
    if (issuesData.length == 0) return repositoryList;

    // Replace symbols in the language name with slugs. Is there a more elegant way to do this?
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const repositoryLanguage = repositoryData.language!;
    slugReplacements.forEach(
      (r) => (repositoryData.language = repositoryData.language!.replaceAll(r.symbol, r.slug))
    );
    return [
      ...(await repositoryList),
      {
        description: repositoryData.description,
        id: repositoryData.id,
        language: repositoryLanguage,
        last_modified: repositoryData.pushed_at,
        license: repositoryData.license?.name,
        name: repositoryData.name,
        owner: repositoryData.owner.login,
        stars_display: millify(repositoryData.stargazers_count),
        stars: repositoryData.stargazers_count,
        tag: slugify(repositoryData.language, { lower: true }),
        topics: repositoryData.topics,
        url: repositoryData.html_url,
        // Same hack to get around the very complicated type of octokit.issues.listForRepo
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issues: issuesData.map((issue: any) => ({
          id: issue.id,
          comments_count: issue.comments,
          created_at: issue.created_at,
          number: issue.number,
          title: issue.title,
          url: issue.html_url
        }))
      }
    ];
  }, Promise.resolve([]))
  .then((repositories: Repository[]) => {
    // Create a list of tags from the repositories for filtering in the UI
    // Ignore tags that have less than 3 repositories
    const tags = repositories
      .reduce((tags: Tag[], repository: Repository) => {
        if (!repository.tag) return tags;
        const index = tags.findIndex((tag: Tag) => tag.id === repository.tag);
        // Is there a more elegant way to do this?
        if (index > -1) {
          tags[index].count++;
          return tags;
        }
        return [...tags, { id: repository.tag, display: repository.language, count: 1 }];
      }, [])
      .filter((tag: Tag) => tag.count >= 3);

    return {
      invalidRepositories,
      appData: {
        repositories,
        tags
      }
    };
  })
  .then(({ invalidRepositories, appData }) => {
    // Write generated data to file for use in the app
    fs.writeFileSync("./generated.json", JSON.stringify(appData));

    // Not the most elegant solution, but this update the list of repositories in firstissue.json just fine
    firstissue.repositories = firstissue.repositories.filter(
      (repository: string) => !invalidRepositories.includes(repository)
    );

    // Write updated list of repositories to file
    fs.writeFileSync("./firstissue.json", JSON.stringify(firstissue, null, 2));
  })
  .finally(() => {
    console.log("Finished generating data.");
  })
  .catch((error: any) => {
    console.error(error);
  });
