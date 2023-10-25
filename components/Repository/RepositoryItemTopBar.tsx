import { Repository } from "../../types";
import { CollectivButton } from "../Sponsor/CollectivButton";
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
      <div className="flex flex-1 items-center justify-end">
        <div className={`h-2 w-2 rounded-full ${repositoryHasNewIssues ? "bg-pink" : ""}`}></div>
      </div>
      {isIssueOpen && (
        <div className="hidden xl:block">
          <CollectivButton
            repositoryName={repositoryName}
            repositoryOwner={repositoryOwner}
            repositoryUrl={repositoryUrl}
          />
        </div>
      )}
      <RepositoryIssueNumberIndicator numberOfIssues={repositoryNumIssues} />
    </div>
  );
};
