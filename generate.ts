import { Octokit } from "@octokit/core";
import {
  Issue,
  IssueEdge,
  Label,
  LabelEdge,
  Language,
  Query,
  Repository,
  RepositoryTopic,
  RepositoryTopicEdge,
  SearchResultItemEdge,
  validate
} from "@octokit/graphql-schema";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { RequestOptions } from "@octokit/types";
import dayjs from "dayjs";
import fs from "fs";
import millify from "millify";
import slugify from "slugify";

import firstissue from "./firstissue.json";
import {
  CountableTag as CountableTagModel,
  Issue as IssueModel,
  Repository as RepositoryModel,
  Tag as TagModel
} from "./types";

/** Number of repositories to query per request (max 100, but set to a smaller number to prevent timeouts) */
const REPOS_PER_REQUEST = 50;
/** Maximum number of issues to retrieve per repository */
const MAX_ISSUES = 10;

// symbols to replace with slugify
slugify.extend({
  "#": "sharp",
  "+": "plus"
});

// Setup Octokit (GitHub API client)
const MyOctokit = Octokit.plugin(throttling, retry);
const octokit = new MyOctokit({
  auth: process.env.GH_PERSONAL_ACCESS_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: object, octokit: Octokit, retryCount: number) => {
      const { method, url } = options as RequestOptions;
      octokit.log.warn(`Request quota exhausted for request ${method} ${url}`);

      if (retryCount < 1) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onSecondaryRateLimit: (retryAfter: number, options: object, octokit: Octokit) => {
      // does not retry, only logs a warning
      const { method, url } = options as RequestOptions;
      octokit.log.warn(`SecondaryRateLimit detected for request ${method} ${url}`);
    }
  }
});

/**
 * Retrieve a list of repositories by calling GitHub GraphQL API.
 *
 * Use {@link https://docs.github.com/en/graphql/overview/explorer GitHub's GraphQL API explorer} to
 * build and test the search query.
 */
const getRepositories = async (
  repositories: string[],
  labels: string[]
): Promise<RepositoryModel[]> => {
  // Filter results with search qualifiers
  // See https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
  const searchQuery = [
    ...repositories.map((repo) => `repo:${repo}`),
    "archived:false",
    "is:public",
    "stars:>=1000",
    `pushed:>=${dayjs().add(-1, "month").format("YYYY-MM-DD")}`
  ].join(" ");

  const gqlQuery = `
  query {
    search(
      query: "${searchQuery}"
      type: REPOSITORY
      first: 100
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            isArchived
            isDisabled
            isPrivate
            primaryLanguage {
              id
              name
            }
            stargazerCount
            # return first 20 open issues with one or more of the labels we want
            issues( 
              states: OPEN
              filterBy: {labels: [${labels.map((label) => `"${label}"`).join(",")}]}
              orderBy: {field: CREATED_AT, direction: DESC}
              first: ${MAX_ISSUES}
            ) {
              totalCount
              edges {
                node {
                  id
                  title
                  number
                  url
                  comments {
                    totalCount
                  }
                  createdAt
                }
              }
            }
            pushedAt
            licenseInfo {
              name
            }
            description
            url
            repositoryTopics(first: 10) {
              edges {
                node {
                  topic {
                    name
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const gqlQueryErrors = validate(gqlQuery);
  if (gqlQueryErrors.length > 0) {
    // if query is invalid, throw error
    throw `GraphQL query is invalid:\n\t${gqlQueryErrors
      .map((error) => error.message)
      .join("\n\t")}`;
  }

  const searchResults = await octokit.graphql<Pick<Query, "search">>({ query: gqlQuery });

  // map response data to our Repository model
  const repoData =
    searchResults.search.edges
      ?.filter((edge) => edge !== undefined)
      .map((edge) => (edge as SearchResultItemEdge).node as Repository)
      // skip repos where language is null
      .filter((repo) => !!(repo.primaryLanguage as Language))
      .map(
        (repo): RepositoryModel => ({
          id: repo.id,
          owner: repo.owner.login,
          name: repo.name,
          description: repo.description === undefined ? null : repo.description,
          url: repo.url,
          stars: repo.stargazerCount,
          stars_display: millify(repo.stargazerCount),
          license: repo.licenseInfo?.name,
          last_modified: repo.pushedAt,
          language: {
            id: slugify((repo.primaryLanguage as Language).name, { lower: true }),
            display: (repo.primaryLanguage as Language).name
          },
          topics: repo.repositoryTopics.edges
            ?.filter((edge) => edge !== undefined)
            .map((edge) => (edge as RepositoryTopicEdge).node as RepositoryTopic)
            .map((topic) => ({
              id: slugify(topic.topic.name, { lower: true }),
              display: topic.topic.name
            })),
          // TODO: random sort issues
          issues:
            repo.issues.edges
              ?.filter((edge) => edge !== undefined)
              .map((edge) => (edge as IssueEdge).node as Issue)
              .map(
                (issue): IssueModel => ({
                  id: issue.id,
                  number: issue.number,
                  title: issue.title,
                  url: issue.url,
                  comments_count: issue.comments.totalCount,
                  created_at: issue.createdAt,
                  labels:
                    issue.labels?.edges
                      ?.filter((edge) => edge !== undefined)
                      .map((edge) => (edge as LabelEdge).node as Label)
                      .map((label) => ({
                        id: slugify(label.name, { lower: true }),
                        display: label.name
                      })) ?? []
                })
              )
              .sort((a, b) => a.number - b.number) ?? [],
          has_new_issues:
            repo.issues.edges
              ?.filter((edge) => edge !== undefined)
              .map((edge) => (edge as IssueEdge).node as Issue)
              .some(
                // Repository has "new" issues if there are any issues created in the last week
                (issue) => dayjs().diff(dayjs(issue.createdAt), "day") <= 7
              ) ?? false
        })
      ) ?? [];

  // unfortunately, there's no way to filter repositories by number of issues in the search query
  // filter out repos with less than 3 open issues
  return repoData.filter((repo) => repo.issues.length >= 3);
};

[...new Set(firstissue.repositories)]
  .slice(0, process.env.NODE_ENV === "development" ? 200 : firstissue.repositories.length)
  .reduce((repoChunks: string[][], repo: string, index) => {
    // Split repositories into smaller chunks
    const chunkIndex = Math.floor(index / REPOS_PER_REQUEST);
    if (!repoChunks[chunkIndex]) {
      repoChunks[chunkIndex] = [];
    }
    repoChunks[chunkIndex].push(repo);
    return repoChunks;
  }, [])
  .reduce<Promise<RepositoryModel[]>>(async (repoData, chunk, index, arr) => {
    // Wait 5s between each request to keep within secondary rate limit
    await new Promise((resolve) => setTimeout(resolve, 5000 * index));

    console.log(
      `Getting repositories - chunk ${index + 1} of ${arr.length} (size: ${chunk.length})`
    );
    const repositories = await getRepositories(chunk, firstissue.labels);

    return [...(await repoData), ...repositories];
  }, Promise.resolve([]))
  .then((repoData) => {
    // Get a list of distinct languages for use with filtering in the UI
    const filterLanguages = Object.values(
      repoData.reduce((arr: { [key: string]: CountableTagModel }, repo: RepositoryModel) => {
        // group languages by id and count them
        const { id, display } = repo.language;
        if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
        else arr[id].count++;
        return arr;
      }, {} as { [key: string]: CountableTagModel })
    )
      // Ignore language with less than 3 repositories
      .filter((language) => language.count >= 3)
      // Sort alphabetically
      .sort((a, b) => a.display.localeCompare(b.display));

    // Get a list of distinct topics for use with filtering in the UI
    const filterTopics = Object.values(
      repoData
        .filter((repo) => repo.topics !== undefined)
        .flatMap((repo) => repo.topics as TagModel[])
        .reduce((arr: { [key: string]: CountableTagModel }, topic: TagModel) => {
          // group topics by id and count them
          const { id, display } = topic;
          if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
          else arr[id].count++;
          return arr;
        }, {} as { [key: string]: CountableTagModel })
    )
      // Ignore topics with less than 3 repositories
      .filter((topic) => topic.count >= 3)
      // Sort by count desc
      .sort((a, b) => b.count - a.count);

    return {
      // Sort the repositories randomly so that the list isn't always the same
      repositories: repoData.sort(() => Math.random() - 0.5),
      languages: filterLanguages,
      topics: filterTopics
    };
  })
  .then((data) => {
    // Write generated data to file for use in the app
    fs.writeFileSync("./generated.json", JSON.stringify(data));
    console.log("Generated generated.json");

    // Update firstissue.json with new list of repositories
    // TODO: is this correct? repos that temporarily fail our repo criteria will be removed forever!
    firstissue.repositories = data.repositories
      .map((repo) => `${repo.owner}/${repo.name}`)
      // Sort alphabetically
      .sort((a, b) => a.localeCompare(b));
    fs.writeFileSync("./firstissue.json", JSON.stringify(firstissue, null, 2));
    console.log("Generated firstissue.json");

    // Build sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://firstissue.dev</loc>
        </url>
        ${data.languages
          .map(
            (language: CountableTagModel) =>
              `<url><loc>https://firstissue.dev/language/${language.id}</loc></url>`
          )
          .join("")}
        ${data.topics
          .map(
            (topic: CountableTagModel) =>
              `<url><loc>https://firstissue.dev/topic/${topic.id}</loc></url>`
          )
          .join("")}
      </urlset>
    `;

    fs.writeFileSync("./public/sitemap.xml", sitemap);
    console.log("Generated sitemap.xml");
  })
  .finally(() => {
    console.log("Data generation complete.");
  })
  .catch((error: any) => {
    console.error(error);
  });
