import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

import { Repository } from "../../types";
import { IssuesList } from "./IssueList";
import { RepositoryDescription } from "./RepositoryDescription";
import { RepositoryItemTopBar } from "./RepositoryItemTopBar";
import { RepositoryMetadata } from "./RepositoryMetadata";

type RepositoryItemProps = {
  repository: Repository;
};

dayjs.extend(relativeTime);

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const [isIssueOpen, setIsIssueOpen] = useState(false);

  return (
    <div
      id={`repo-${repository.id}`}
      className={`group mb-4 w-full select-none rounded-md border ${
        isIssueOpen ? "border-primary" : "border-silver-100"
      }`}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className="cursor-pointer px-5 py-3 transition-all hover:bg-black-300"
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
          lastModified={dayjs(repository.last_modified).fromNow()}
          repositoryLang={repository.language.display}
          repositoryStars={repository.stars_display}
        />
      </div>
      {isIssueOpen && <IssuesList issues={repository.issues} />}
    </div>
  );
};
