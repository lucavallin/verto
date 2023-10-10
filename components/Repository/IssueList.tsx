import useMediaQuery from "../../hooks/useMediaQuery";
import { Issue, Repository } from "../../types";
import { RepositoryCollectivButton } from "../Collectiv/RepositoryCollectivButton";

import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
  repositoryName: Repository["name"];
  repositoryOwner: Repository["owner"];
};

export const IssuesList = ({ issues, repositoryName, repositoryOwner }: IssueListProps) => {
  const isMedia720px = useMediaQuery("(max-width : 720px)");

  return (
    <>
      <ol className="border-t border-dark-200 px-5 py-3 text-base leading-loose">
        {issues.map((issue) => (
          <IssueItem issue={issue} key={issue.id} />
        ))}
      </ol>
      {isMedia720px && (
        <RepositoryCollectivButton
          repositoryName={repositoryName}
          repositoryOwner={repositoryOwner}
        />
      )}
    </>
  );
};
