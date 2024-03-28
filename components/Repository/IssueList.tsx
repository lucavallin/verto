import { Issue } from "../../types";

import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
};

export const IssuesList = ({ issues }: IssueListProps) => {
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
