import { RepositorySortOrder } from "types";
import { create } from "zustand";

export interface RepositoryQuery {
  languages: string[];
  tags: string[];
  search: string;
  sort: RepositorySortOrder;
}

interface RepositoryQueryStore {
  query: RepositoryQuery;
  setQuery: (key: keyof RepositoryQuery, value: string[] | string | RepositorySortOrder) => void;
  setInitialQuery: (query: Partial<RepositoryQuery>) => void;
}

const initialquery: RepositoryQuery = {
  languages: [],
  tags: [],
  search: "",
  sort: RepositorySortOrder.NONE
};

const useRepositoryQuery = create<RepositoryQueryStore>((set) => ({
  query: initialquery,
  setQuery: (key, value) =>
    set((state) => {
      return { query: { ...state.query, [key]: value } };
    }),
  setInitialQuery: (query) => set({ query: { ...initialquery, ...query } })
}));

export { useRepositoryQuery };
