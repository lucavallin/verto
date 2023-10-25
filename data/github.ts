import dayjs from "dayjs";
import { Issue as IssueModel, Repository as RepositoryModel } from "../types";

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
import millify from "millify";
import slugify from "slugify";

// Maximum number of issues to retrieve per repository. Only used by GitHub currently.
const MAX_ISSUES = 10;

// Setup Octokit (GitHub API client)
const MyOctokit = Octokit.plugin(throttling, retry);
const octokit = new MyOctokit({
  auth: process.env.GH_PAT,
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
    onSecondaryRateLimit: (
      retryAfter: number,
      options: object,
      octokit: Octokit,
      retryCount: number
    ) => {
      const { method, url } = options as RequestOptions;
      octokit.log.warn(`SecondaryRateLimit detected for request ${method} ${url}`);

      if (retryCount < 2) {
        // retries twice
        octokit.log.warn(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    }
  }
});

/**
 * Searches for GitHub repositories based on the provided search criteria.
 *
 * Uses {@link https://docs.github.com/en/graphql/overview/explorer GitHub's GraphQL API explorer} to
 * build and test the search query.
 *
 * @param url - The URL of the GitHub instance to search.
 * @param repositories - An array of repository names to search for.
 * @param labels - An array of labels to filter issues by.
 * @returns A Promise that resolves to an array of RepositoryModel objects.
 * @throws An error if the GraphQL query is invalid.
 */
export const getGitHubRepositories = async (
  url: string,
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
            # return first 10 open issues with one or more of the labels we want
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
    // if query is invalid, gqlQueryErrors will contain errors
    throw new Error(
      `GraphQL query is invalid:\n\t${gqlQueryErrors.map((error) => error.message).join("\n\t")}`
    );
  }

  const searchResults = await octokit.graphql<Pick<Query, "search">>({
    query: gqlQuery
  });

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
            id: slugify((repo.primaryLanguage as Language).name, {
              lower: true
            }),
            display: (repo.primaryLanguage as Language).name
          },
          tags: repo.repositoryTopics.edges
            ?.filter((edge) => edge !== undefined)
            .map((edge) => (edge as RepositoryTopicEdge).node as RepositoryTopic)
            .map((topic) => ({
              id: slugify(topic.topic.name, { lower: true }),
              display: topic.topic.name
            })),
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
              // sort issues by issue number
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
