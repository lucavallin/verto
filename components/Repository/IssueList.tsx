import { Issue, Repository } from "../../types";

import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
  repositoryDetails: {
    name: Repository["name"];
    owner: Repository["owner"];
    url: Repository["url"];
  };
};

export const IssuesList = ({ issues, repositoryDetails }: IssueListProps) => {
  return (
    <>
      <ol className="border-t border-silver-100 px-5 py-3 text-base leading-loose">
        {issues.map((issue) => (
          <IssueItem issue={issue} key={issue.id} />
        ))}
      </ol>
    </>
  );
};
