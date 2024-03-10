import { Procedure, Router } from "@/lib/trpc";
import { RepositoriesValidator } from "@/lib/validators";
import { checkTags, chekRepoByNameDescTags, sortRepo } from "@/server/helpers";
import { RepositorySortOrder } from "types";

const mainRouter = Router({
  getRepositories: Procedure.input(RepositoriesValidator).query(({ ctx, input }) => {
    const { tags, languages, search, sort } = input;

    // Filter repositories based on tags, languages, and search
    const filteredRepos = ctx.data.repositories.filter((repo) => {
      const matchesTags = tags.length === 0 || checkTags(repo, tags);
      const matchesLanguages = languages.length === 0 || languages.includes(repo.language.id);
      const matchesSearch = !search || chekRepoByNameDescTags(repo, search, tags);

      return matchesTags && matchesLanguages && matchesSearch;
    });

    // Sort the filtered repositories based on the provided sort criteria
    if (sort !== RepositorySortOrder.NONE) {
      filteredRepos.sort((a, b) => sortRepo(a, b, sort));
    }

    return filteredRepos;
  }),

  getLanguages: Procedure.query(({ ctx }) => {
    return ctx.data.languages;
  }),

  getTags: Procedure.query(({ ctx }) => {
    return ctx.data.tags;
  })
});

export { mainRouter };
