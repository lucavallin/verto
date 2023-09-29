import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect, useState } from "react";

import { Repository } from "../../types";
import { IssuesList } from "./IssueList";
import { RepositoryDescription } from "./RepositoryDescription";
import { RepositoryItemTopBar } from "./RepositoryItemTopBar";
import { RepositoryMetadata } from "./RepositoryMetadata";

type RepositoryItemProps = {
  repository: Repository;
};

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const [isIssueOpen, setIsIssueOpen] = useState(false);

  dayjs.extend(relativeTime);
  const useLastModified = (date: string) => {
    const [lastModified, setLastModified] = useState("");

    useEffect(() => setLastModified(dayjs(date).fromNow()), [date]);

    return lastModified;
  };
  const lastModified = useLastModified(repository.last_modified);

  return (
    <div
      id={`repo-${repository.id}`}
      className={`select-none border w-full rounded-md mb-4 group ${
        isIssueOpen ? "border-primary" : "border-dark-200"
      }`}
    >
      <div
        className="px-5 py-3 cursor-pointer transition-all hover:bg-dark-300"
        onClick={() => setIsIssueOpen(!isIssueOpen)}
      >
        <RepositoryItemTopBar
          isIssueOpen={isIssueOpen}
          repositoryHasNewIssues={repository.has_new_issues}
          repositoryName={repository.name}
          repositoryNumIssues={repository.issues.length}
          repositoryOwner={repository.owner}
          repositoryUrl={repository.url}
        />
        <RepositoryDescription repositoryDescription={repository.description} />
        <RepositoryMetadata
          isIssueOpen={isIssueOpen}
          lastModified={lastModified}
          repositoryLang={repository.language.display}
          repositoryStars={repository.stars_display}
        />
      </div>
      {isIssueOpen && <IssuesList issues={repository.issues} />}
    </div>
  );
};
