import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { Octokit } from "@octokit/rest";
import * as octokitTypes from "@octokit/types";
import dayjs from "dayjs";
import fs from "fs";
import millify from "millify";
import slugify from "slugify";

import firstissue from "./firstissue.json";
import { CountableTag, Issue, Repository, Tag } from "./types";

// Setup Octokit (GitHub API client)
const MyOctokit = Octokit.plugin(throttling, retry);
export const octokit = new MyOctokit({
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

["owner1", "owner2", ...]
  .reduce<Promise<string[]>>(async (repos, owner, i) => {
    await new Promise((resolve) => setTimeout(resolve, 1000 * i));
    const response = await octokit.repos.listForUser({
      username: owner,
      sort: "updated",
      per_page: 100
    });
    return [...(await repos), ...response.data.map((repo) => repo.owner.login + "/" + repo.name)];
  }, Promise.resolve([]))
  .then((repos) => {
    firstissue.repositories = [...firstissue.repositories, ...repos];
    fs.writeFileSync("./firstissue.json", JSON.stringify(firstissue, null, 2));
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
[...new Set(firstissue.repositories)]
  .slice(0, process.env.NODE_ENV === "development" ? 30 : firstissue.repositories.length)
  .reduce<Promise<Repository[]>>(async (repositoryList, r: string, i) => {
    // Wait 1s between each request to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000 * i));

    const [owner, repo] = r.split("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let repositoryData = {} as any;
    try {
      repositoryData = (await octokit.repos.get({ owner, repo })).data;
    } catch (e: any) {
      if (e.status === 404) {
        console.log(`Repository not found: ${owner}/${repo}`);
        // Not the best way to do this, but it works
        invalidRepositories = [...invalidRepositories, r];
        return repositoryList;
      }
      throw e;
    }

    console.log(
      `Processing repository ${processedRepositories++} of ${
        process.env.NODE_ENV === "development" ? 30 : firstissue.repositories.length
      }: ${r}`
    );

    // Skip repos that are archived, disabled, private, or have no language, or have less than 500 stars,
    // or have less than 3 open issues or haven't been updated in the last month
    if (
      repositoryData.archived ||
      repositoryData.disabled ||
      repositoryData.private ||
      !repositoryData.language ||
      repositoryData.stargazers_count < 999 ||
      repositoryData.open_issues_count < 3 ||
      dayjs().diff(dayjs(repositoryData.pushed_at), "month") > 1
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
        language: {
          id: slugify(repositoryData.language, { lower: true }),
          display: repositoryLanguage
        },
        last_modified: repositoryData.pushed_at,
        license: repositoryData.license?.name,
        name: repositoryData.name,
        owner: repositoryData.owner.login,
        stars_display: millify(repositoryData.stargazers_count),
        stars: repositoryData.stargazers_count,
        topics: repositoryData.topics?.map((t: string) => ({
          id: slugify(t, { lower: true }),
          display: t
        })),
        url: repositoryData.html_url,
        // Same hack to get around the very complicated type of octokit.issues.listForRepo
        // Shuffle the issues and take the first 10, then sort by number of comments
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issues: issuesData
          .map((issue: any) => ({
            id: issue.id,
            comments_count: issue.comments,
            created_at: issue.created_at,
            number: issue.number,
            title: issue.title,
            url: issue.html_url
          }))
          .sort(() => Math.random() - 0.5)
          .slice(0, issueLimit)
          .sort((a: Issue, b: Issue) => b.comments_count - a.comments_count)
      }
    ];
  }, Promise.resolve([]))
  .then((repositories: Repository[]) => {
    // Create a list of language agrs from the repositories for filtering in the UI
    const languages = repositories
      .reduce((languages: CountableTag[], repository: Repository) => {
        if (!repository.language) return languages;
        const index = languages.findIndex((tag: Tag) => tag.id === repository.language.id);
        // Is there a more elegant way to do this?
        if (index > -1) {
          languages[index].count++;
          return languages;
        }
        return [
          ...languages,
          { id: repository.language.id, display: repository.language.display, count: 1 }
        ];
      }, [])
      // Ignore language tags that have less than 3 repositories
      .filter((language: CountableTag) => language.count >= 3)
      .sort((a: CountableTag, b: CountableTag) =>
        // Sort alphabetically
        a.id < b.id ? -1 : b.id > a.id ? 1 : 0
      );

    // Create a list of topic tags from the repositories for filtering in the UI
    const topics = repositories
      .filter((repository) => repository.topics && repository.topics.length > 0)
      .flatMap((repository) => repository.topics!)
      .reduce((topics: CountableTag[], candidateTopic: Tag) => {
        const index = topics.findIndex((topic: CountableTag) => topic.id === candidateTopic.id);
        // Is there a more elegant way to do this?
        if (index > -1) {
          topics[index].count++;
          return topics;
        }
        return [...topics, { id: candidateTopic.id, display: candidateTopic.display, count: 1 }];
      }, [])
      // Ignore topic tags that have less than 2 repositories
      .filter((topic: CountableTag) => topic.count >= 3)
      .sort(
        (a: CountableTag, b: CountableTag) =>
          // Sort by number of repositories
          b.count - a.count
      );

    return {
      invalidRepositories,
      appData: {
        // Sort the repositories randomly so that the list isn't always the same
        repositories: repositories.sort(() => Math.random() - 0.5),
        languages,
        topics
      }
    };
  })
  .then(({ invalidRepositories, appData }) => {
    // Write generated data to file for use in the app
    fs.writeFileSync("./generated.json", JSON.stringify(appData));

    // Not the most elegant solution, but this update the list of repositories in firstissue.json just fine
    firstissue.repositories = [...new Set(firstissue.repositories)]
      .filter((repository: string) => !invalidRepositories.includes(repository))
      .sort((a: string, b: string) =>
        // Sort alphabetically
        a.toLowerCase() < b.toLowerCase() ? -1 : b.toLowerCase() > a.toLowerCase() ? 1 : 0
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
