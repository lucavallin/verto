import { Issue } from "../../types";
import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: Issue[];
};

export const IssuesList = ({ issues }: IssueListProps) => {
  return (
    <ol className="px-5 py-3 text-base leading-loose border-t border-dark-200">
      {issues.map((issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ol>
  );
};
