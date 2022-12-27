import React from "react";

import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";

type RepositoryListProps = {
  repositories: Repository[];
};

export const RepositoryList = ({ repositories }: RepositoryListProps) => (
  <main>
    <div className="p-4 w-full">
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </div>
  </main>
);
