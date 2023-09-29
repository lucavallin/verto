import { Repository } from "../../types";
import { RepositoryIssueNumberIndicator } from "./RepositoryIssueNumberIndicator";
import { RepositoryLinkTitle } from "./RepositoryLinkTitle";

type RepositoryItemTopBarProps = {
  isIssueOpen: boolean;
  repositoryHasNewIssues: boolean;
  repositoryName: Repository["name"];
  repositoryNumIssues: number;
  repositoryOwner: Repository["owner"];
  repositoryUrl: Repository["url"];
};

export const RepositoryItemTopBar = ({
  isIssueOpen,
  repositoryHasNewIssues,
  repositoryName,
  repositoryNumIssues,
  repositoryOwner,
  repositoryUrl
}: RepositoryItemTopBarProps) => {
  return (
    <div className="flex flex-row">
      <RepositoryLinkTitle
        isIssueOpen={isIssueOpen}
        repositoryName={repositoryName}
        repositoryOwner={repositoryOwner}
        repositoryUrl={repositoryUrl}
      />
      <div className="flex flex-1 justify-end items-center">
        <div className={`w-2 h-2 rounded-full ${repositoryHasNewIssues ? "bg-primary" : ""}`}></div>
      </div>
      <RepositoryIssueNumberIndicator
        isIssueOpen={isIssueOpen}
        numberOfIssues={repositoryNumIssues}
      />
    </div>
  );
};
