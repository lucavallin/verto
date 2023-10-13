import dayjs from "dayjs";
import millify from "millify";
import slugify from "slugify";
import { GitLabRepository, Repository as RepositoryModel, Tag as TagModel } from "../types";
import { extendedSlugify } from "./utils";

/**
 * Fetches GitLab repositories with specified IDs and labels, and returns an array of RepositoryModel objects.
 * Uses {@link https://gitlab.com/-/graphql-explorer GitLab's GraphQL API explorer} to build and test the search query.
 *
 * @param url - The base URL of the GitLab instance.
 * @param repositories - An array of GitLab repository IDs to fetch.
 * @param labels - An array of GitLab issue labels to filter by.
 * @returns An array of RepositoryModel objects.
 */
export const getGitLabRepositories = async (
  url: string,
  repositories: string[],
  labels: string[]
): Promise<RepositoryModel[]> => {
  const labelsFilter = labels.map((label) => `"${label}"`).join(",");

  const response = await fetch(`${url}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      query: `
      query {
        projects(
          ids: [${repositories
            .map((repoId) => `"gid://gitlab/Project/${repoId.split("|")[1]}"`)
            .join(",")}],
          withMergeRequestsEnabled:true
          withIssuesEnabled:true
          sort: "stars_desc"
        ) {
          nodes {
            id
            name
            description
            starCount
            openIssuesCount
            lastActivityAt
            webUrl
            group {
              fullName
            },
            languages {
              name
              share
            },
            topics,
            issues(
              first:10
              or: {
                labelNames: [${labelsFilter}]
              },
              state:opened
              sort:UPDATED_DESC
              confidential:false
            ) {
              nodes {
                iid
                webUrl
                title
                createdAt
                labels { 
                  nodes { title }
                }
              }
            }
          }
        }
      }`
    })
  });

  const data = await response.json();
  const projects = data.data.projects.nodes.map((project: GitLabRepository): RepositoryModel => {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
      owner: project.group.fullName,
      language: ((language): TagModel => ({
        id: extendedSlugify(language.name),
        display: language.name
      }))(
        project.languages.reduce((prev, current) => {
          return prev && prev.share > current.share ? prev : current;
        })
      ),
      last_modified: project.lastActivityAt,
      stars: project.starCount,
      stars_display: millify(project.starCount),
      url: project.webUrl,
      tags: project.topics.map((topic) => ({
        id: topic,
        display: topic
      })),
      issues: project.issues.nodes.map((issue) => ({
        id: issue.webUrl,
        number: parseInt(issue.iid),
        title: issue.title,
        url: issue.webUrl,
        comments_count: 0,
        created_at: issue.createdAt,
        labels: issue.labels.nodes.map((label) => ({
          id: slugify(label.title, { lower: true }),
          display: label.title
        }))
      })),
      has_new_issues: project.issues.nodes.some(
        (issue) => dayjs().diff(dayjs(issue.createdAt), "day") <= 7
      )
    };
  });

  return projects.filter(
    (project: RepositoryModel) => project.issues.length >= 3 && project.stars > 300
  );
};
