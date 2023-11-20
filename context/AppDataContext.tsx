// AppDataContext.tsx
import { getData } from "app/data-loader";
import React, { createContext, useEffect, useState } from "react";
import {
  AppData,
  CountableLanguage,
  CountableTag,
  Repository,
  Issue,
  RepositorySortOrder
} from "../types";

type AppDataContextType = AppData & {
  filterRepositoriesByTag: (tag: string) => Repository[];
  filterRepositoriesByQuery: (query: string) => void;
  filterRepositoriesByLanguage: (languageId: string) => Repository[];
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
  filterRepositoriesByLanguage: () => []
};

const AppDataContext = createContext<AppDataContextType>(DEFAULT_VALUE);

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const data = getData();
  const query = "";
  const {
    repositories: allRepositories
  }: {
    repositories: Repository[];
    languages: CountableLanguage[];
    tags: CountableTag[];
  } = data;
  const [repositories, setRepositories] = useState<Repository[]>(allRepositories);
  const [repositorySortOrder, setRepositorySortOrder] = useState<RepositorySortOrder>(
    RepositorySortOrder.NONE
  );

  useEffect(() => {
    const { repositories } = data;
    setRepositories(repositories);
  }, [data]);

  const updateRepositorySortOrder = (sortOrder: RepositorySortOrder) => {
    const isSetToDefaultSort = sortOrder === RepositorySortOrder.NONE;
    const shouldDeselect = !isSetToDefaultSort && sortOrder === repositorySortOrder;

    const finalSortOrder = shouldDeselect ? RepositorySortOrder.NONE : sortOrder;

    setRepositorySortOrder(finalSortOrder);
    updateRepositoriesOnSortChange(finalSortOrder);
  };

  const updateRepositoriesOnSortChange = (sortOrder: RepositorySortOrder) => {
    let updatedRepositories: Repository[] = [];

    //Find and return the newest issue in a given repository
    if (sortOrder === RepositorySortOrder.NEW_ISSUES) {
      function getNewestIssue(repository: Repository): Issue {
        const sortedIssues = [...repository.issues].sort((a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return dateB - dateA; 
        });
        return sortedIssues[0]; 
      }
      //Compare current repo's newest issue to next repo's newest issue, sort by newest issue first
      updatedRepositories = [...allRepositories].sort((currentRepository, nextRepository) => {
        const currentNewestIssue = getNewestIssue(currentRepository);
        const nextNewestIssue = getNewestIssue(nextRepository);
        const timestampDiff = new Date(nextNewestIssue.created_at).getTime() - new Date(currentNewestIssue.created_at).getTime();

        return timestampDiff;
      });
    }

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
    return repositories.filter((repository) => repository.tags?.some((t) => t.id === tag));
  };

  const filterRepositoriesByQuery = (query: string) => {
    if (query.length >= 3) {
      // Filter repositories based on query
      const filtered = allRepositories.filter((repository) => {
        const { name, owner, issues } = repository;
        const searchText = `${name} ${owner} ${issues.map((issue) => issue.title)}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
      });

      setRepositories(filtered);
    } else {
      setRepositories(allRepositories);
    }
  };

  const filterRepositoriesByLanguage = (languageId: string) => {
    return repositories.filter((repository) => repository.language.id === languageId);
  };

  const value = {
    languages: data.languages,
    repositories,
    repositorySortOrder,
    tags: data.tags,
    query,
    updateRepositorySortOrder,
    filterRepositoriesByTag,
    filterRepositoriesByQuery,
    filterRepositoriesByLanguage
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export { AppDataContext, AppDataProvider };
