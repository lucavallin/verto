import config from "../config.json";
import { Data, Repository as RepositoryModel, Source as SourceModel } from "../types";
import { getFilteredLanguages, getFilteredTags, processSource } from "./shared";
import { generateAndWriteSiteMap, writeDataFile } from "./utils";

const main = async () => {
  console.log(
    "⚠️ This command must be run from the root of the project directory with `npm run prebuild`"
  );
  try {
    // Get data from all sources defined in config.json
    const repositories = await (config as SourceModel[]).reduce<Promise<RepositoryModel[]>>(
      async (repoData, source) => {
        return repoData.then(async (repos) => {
          const repositories = await processSource(source);
          return [...repos, ...repositories];
        });
      },
      Promise.resolve([])
    );

    // Get a list of distinct languages with counts for use with filtering in the UI
    const filteredLanguages = getFilteredLanguages(repositories);

    // Get a list of distinct tags with counts for use with filtering in the UI
    const filteredTags = getFilteredTags(repositories);

    const data: Data = {
      // Sort the repositories randomly so that the list isn't always the same
      repositories: repositories.sort(() => Math.random() - 0.5),
      languages: filteredLanguages,
      tags: filteredTags
    };

    await Promise.all([writeDataFile(data), generateAndWriteSiteMap(data)]);

    console.log("Data generation complete.");
  } catch (e) {
    console.error(e);
  }
};

main();




