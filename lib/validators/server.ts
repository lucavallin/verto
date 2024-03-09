import { RepositorySortOrder } from "types";
import { z } from "zod";

const RepositoriesValidator = z.object({
  tags: z.array(z.string()),
  languages: z.array(z.string()),
  search: z.string(),
  sort: z.nativeEnum(RepositorySortOrder)
});

export { RepositoriesValidator };
