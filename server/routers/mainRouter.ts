import { Procedure, Router } from "@/lib/trpc";
import { RepositoriesValidator } from "@/lib/validators";
import { checkTags, chekRepoByNameDescTags, sortRepo } from "@/server/helpers";
import { RepositorySortOrder } from "types";

const mainRouter = Router({
  getRepositories: Procedure.input(RepositoriesValidator).query(({ ctx, input }) => {
    const { tags, languages, search, sort, page, pageSize } = input;

    const searchLower = search.toLowerCase();

    const languageSet = new Set(languages.map((lang) => lang.toLowerCase()));

    const filteredRepos = ctx.data.repositories.filter((repo) => {
      const matchesTags = tags.length === 0 || checkTags(repo, tags);
      const matchesLanguages =
        languages.length === 0 || languageSet.has(repo.language.id.toLowerCase());
      const matchesSearch = !search || chekRepoByNameDescTags(repo, searchLower, tags);

      return matchesTags && matchesLanguages && matchesSearch;
    });

    // Sort the filtered repositories based on the provided sort criteria
    if (sort !== RepositorySortOrder.NONE) {
      filteredRepos.sort((a, b) => sortRepo(a, b, sort));
    }

    const repositories = filteredRepos.slice(0, page * pageSize);

    return repositories;
  }),

  getLanguages: Procedure.query(({ ctx }) => {
    return ctx.data.languages;
  }),

  getTags: Procedure.query(({ ctx }) => {
    return ctx.data.tags;
  })
});

export { mainRouter };
