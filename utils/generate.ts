import { Octokit } from "@octokit/rest";
import fs from "fs";
import millify from "millify";
import slugify from "slugify";

import gfiConfig from "../gfi.config.json";
import { AppData, Repository, Tag } from "../types";

export const getRepositoryData = async (): Promise<AppData> => {
  const octokit = new Octokit({
    auth: process.env.GH_PERSONAL_ACCESS_TOKEN
  });

  const slugReplacements = [
    { symbol: "#", slug: "sharp" },
    { symbol: "+", slug: "plus" }
  ];
  const issueLimit = 10;

  // Take only the first 10 repositories in development otherwise we make GitHub unhappy
  const repositories = await gfiConfig.repositories
    .slice(0, process.env.NODE_ENV === "development" ? 10 : gfiConfig.repositories.length)
    .reduce<Promise<Repository[]>>(async (repositoryList, r: string) => {
      const [owner, repo] = r.split("/");
      const { data: repositoryData } = await octokit.repos.get({ owner, repo });

      // Skip repos that are archived, disabled, private, or have no language, or have less than 100 stars, or have less than 3 open issues
      if (
        repositoryData.archived ||
        repositoryData.disabled ||
        repositoryData.private ||
        !repositoryData.language ||
        repositoryData.stargazers_count < 100 ||
        repositoryData.open_issues_count < 3
      ) {
        // TODO It would be nice to remove the repo from gfi.config.json forever
        console.log(`Skipping repository: ${owner}/${repo}`);
        return repositoryList;
      }

      // Promise<any> is a hack to get around the very complicated type of octokit.issues.listForRepo
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const issuesData = await gfiConfig.labels.reduce<Promise<any>>(
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
      slugReplacements.forEach(
        (r) => (repositoryData.language = repositoryData.language!.replaceAll(r.symbol, r.slug))
      );
      return [
        ...(await repositoryList),
        {
          name: repositoryData.name,
          owner: repositoryData.owner.login,
          description: repositoryData.description,
          language: repositoryData.language,
          tag: slugify(repositoryData.language, { lower: true }),
          url: repositoryData.html_url,
          stars: repositoryData.stargazers_count,
          stars_display: millify(repositoryData.stargazers_count),
          last_modified: repositoryData.pushed_at,
          id: repositoryData.id,
          // Same hack to get around the very complicated type of octokit.issues.listForRepo
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          issues: issuesData.map((issue: any) => ({
            title: issue.title,
            url: issue.html_url,
            number: issue.number,
            comments_count: issue.comments,
            created_at: issue.created_at
          }))
        }
      ];
    }, Promise.resolve([]));

  // Create a list of tags, excluding tags with less than 3 occurrences
  const tags = repositories
    .reduce((tags: Tag[], repository: Repository) => {
      if (!repository.tag) return tags;
      const index = tags.findIndex((tag: Tag) => tag.id === repository.tag);
      // Is there a more elegant way to do this?
      if (index > -1) {
        tags[index].count++;
        return tags;
      }
      return [...tags, { id: repository.tag, count: 1 }];
    }, [])
    .filter((tag: Tag) => tag.count >= 3);

  return {
    repositories,
    tags
  };
};

getRepositoryData().then((data) => fs.writeFileSync("./generated.json", JSON.stringify(data)));
