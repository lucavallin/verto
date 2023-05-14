import React, { createContext, useState } from "react";

import data from "../generated.json";
import { AppData, CountableTag, Repository, RepositorySortOrder } from "../types";

const DEFAULT_VALUE: AppData = {
  languages: [],
  repositories: [],
  repositorySortOrder: RepositorySortOrder.NONE,
  topics: [],
  updateRepositorySortOrder: () => {}
};

const AppDataContext = createContext<AppData>(DEFAULT_VALUE);

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    repositories: allRepositories,
    languages,
    topics
  }: { repositories: Repository[]; languages: CountableTag[]; topics: CountableTag[] } = data;
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

  const value = {
    languages,
    repositories,
    repositorySortOrder,
    topics,
    updateRepositorySortOrder
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export { AppDataProvider, AppDataContext };
