// AppDataContext.tsx
import React, { createContext, useState } from "react";
import data from "../data/data.json";
import { AppData, CountableTag, Repository, RepositorySortOrder } from "../types";

type AppDataContextType = AppData & {
  filterRepositoriesByTag: (tag: string) => Repository[];
  filterRepositoriesByQuery: (query: string) => void;
};

const DEFAULT_VALUE: AppDataContextType = {
  languages: [],
  repositories: [],
  repositorySortOrder: RepositorySortOrder.NONE,
  tags: [],
  query: "",
  updateRepositorySortOrder: () => {},
  filterRepositoriesByTag: () => [],
  filterRepositoriesByQuery: () => {}, 
};

const AppDataContext = createContext<AppDataContextType>(DEFAULT_VALUE);

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const query = "";
  const {
    repositories: allRepositories,
    languages,
    tags
  }: {
    repositories: Repository[];
    languages: CountableTag[];
    tags: CountableTag[];
  } = data;
  const [repositories, setRepositories] = useState<Repository[]>(allRepositories);
  const [repositorySortOrder, setRepositorySortOrder] = useState<RepositorySortOrder>(
    RepositorySortOrder.NONE
  );

  const updateRepositorySortOrder = (sortOrder: RepositorySortOrder) => {
    const isSetToDefaultSort = sortOrder === RepositorySortOrder.NONE;
    const shouldDeselect = !isSetToDefaultSort && sortOrder === repositorySortOrder;

    const finalSortOrder = shouldDeselect ? RepositorySortOrder.NONE : sortOrder;

    setRepositorySortOrder(finalSortOrder);
    updateRepositoriesOnSortChange(finalSortOrder);
  };

  const updateRepositoriesOnSortChange = (sortOrder: RepositorySortOrder) => {
    let updatedRepositories: Repository[] = [];

    if (sortOrder === RepositorySortOrder.MOST_STARS) {
      updatedRepositories = [...allRepositories].sort((currentRepository, nextRepository) => {
        return nextRepository.stars - currentRepository.stars;
      });
    }

    if (sortOrder === RepositorySortOrder.LEAST_STARS) {
      updatedRepositories = [...allRepositories].sort((currentRepository, nextRepository) => {
        return currentRepository.stars - nextRepository.stars;
      });
    }

    if (sortOrder === RepositorySortOrder.NONE) {
      updatedRepositories = allRepositories;
    }

    setRepositories(updatedRepositories);
  };

  const filterRepositoriesByTag = (tag: string) => {
    return repositories.filter((repository) =>
      repository.tags?.some((t) => t.id === tag)
    );
  };

  // Define the filter function for the query
  const filterRepositoriesByQuery = (query: string) => {
    if (!query) {
      setRepositories(allRepositories); 
      return;
    }
  
    // Filter repositories based on query
    const filtered = allRepositories.filter((repository) => {
      const { name, owner, issues } = repository; 
      const searchText = `${name} ${owner} ${issues.map((issue) => issue.title)}`.toLowerCase();
      return searchText.includes(query.toLowerCase());
    });
  
    setRepositories(filtered);
  };

  const value = {
    languages,
    repositories,
    repositorySortOrder,
    tags,
    query,
    updateRepositorySortOrder,
    filterRepositoriesByTag,
    filterRepositoriesByQuery,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export { AppDataContext, AppDataProvider };
