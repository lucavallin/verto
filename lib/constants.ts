import { RepositorySortOrder } from "types";

export const MINIMUM_LENGTH = {
  USERNAME: 3,
  PASSWORD: 4
};

export const REPOSITORY_SORT_OPTIONS = [
  RepositorySortOrder.LEAST_STARS,
  RepositorySortOrder.MOST_STARS,
  RepositorySortOrder.NONE
];
