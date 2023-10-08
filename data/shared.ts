import { CountableTag, Repository, Source, Tag } from "../types";
import { getGitHubRepositories } from "./github";
import { getGitLabRepositories } from "./gitlab";

// Number of repositories to query per request (max 100, but set to a smaller number to prevent timeouts)
const REPOS_PER_REQUEST = 25;

const providersSettings = {
  github: {
    getterFunction: getGitHubRepositories, // we can probably separate filtering logic from the data fetcher functions
    // filteringFunction: filterGitHubRepositories, // this can be used to filter the repositories and only contain the filtering logic
    defaultUrl: "https://github.com"
  },
  gitlab: {
    getterFunction: getGitLabRepositories,
    defaultUrl: "https://gitlab.com"
  }
};

/**
 * Processes a source by retrieving its repositories from a provider.
 * @param source The source to process.
 * @returns A promise that resolves to an array of repository models.
 */
export const processSource = (source: Source): Promise<Repository[]> => {
  const providerSettings = providersSettings[source.provider];

  return [...new Set(source.repositories)]
    .slice(0, process.env.NODE_ENV === "development" ? 200 : source.repositories.length)
    .reduce((repoChunks: string[][], repo: string, index) => {
      // Split repositories into smaller chunks, this helps prevent request timeouts
      const chunkIndex = Math.floor(index / REPOS_PER_REQUEST);
      if (!repoChunks[chunkIndex]) {
        repoChunks[chunkIndex] = [];
      }
      repoChunks[chunkIndex].push(repo);
      return repoChunks;
    }, [])
    .reduce<Promise<Repository[]>>(async (repoData, chunk, index, arr) => {
      return repoData.then(async (repos) => {
        console.log(
          `Getting ${source.name} repositories - chunk ${index + 1} of ${arr.length} (size: ${
            chunk.length
          })`
        );

        const repositories = await providerSettings.getterFunction(
          source.url ?? providerSettings.defaultUrl,
          chunk,
          source.labels
        );

        // wait 1s between requests
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return [...repos, ...repositories];
      });
    }, Promise.resolve([]));
};

/**
 * Returns an array of languages with a count of how many repositories use them.
 * Filters out languages with less than 3 repositories and sorts the remaining languages alphabetically.
 * @param repositories An array of Repository objects.
 * @returns An array of CountableTag objects representing the filtered and sorted languages.
 */
export const getFilteredLanguages = (repositories: Repository[]) =>
  Object.values(
    repositories.reduce(
      (arr: { [key: string]: CountableTag }, repo: Repository) => {
        // group languages by id and count them
        const { id, display } = repo.language;
        if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
        else arr[id].count++;
        return arr;
      },
      {} as { [key: string]: CountableTag }
    )
  )
    // Ignore language with less than 3 repositories
    .filter((language) => {
      if (language.count >= 3) return true;
      console.log(
        `Ignoring language "${language.display}" because it has less than 3 repositories.`
      );
      return false;
    })
    // Sort alphabetically
    .sort((a, b) => a.display.localeCompare(b.display));

/**
 * Returns an array of tags that are associated with at least 3 repositories.
 * @param repositories An array of Repository objects.
 * @returns An array of CountableTag objects.
 */
export const getFilteredTags = (repositories: Repository[]) =>
  Object.values(
    repositories
      .filter((repo) => repo.tags !== undefined)
      .flatMap((repo) => repo.tags as Tag[])
      .reduce(
        (arr: { [key: string]: CountableTag }, tag: Tag) => {
          // group tags by id and count them
          const { id, display } = tag;
          if (arr[id] === undefined) arr[id] = { id, display, count: 1 };
          else arr[id].count++;
          return arr;
        },
        {} as { [key: string]: CountableTag }
      )
  )
    // Ignore tags with less than 3 repositories
    .filter((tag) => {
      if (tag.count >= 3) return true;
      console.log(`Ignoring tag "${tag.display}" because it has less than 3 repositories.`);
      return false;
    })
    // Sort by count desc
    .sort((a, b) => b.count - a.count);
