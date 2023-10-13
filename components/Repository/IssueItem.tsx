import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Issue } from "../../types";

type IssueItemProps = {
  issue: Issue;
};

type IssueCommentNumProps = {
  numIssues: number;
};

const IssueCommentNum = ({ numIssues }: IssueCommentNumProps) => {
  return (
    <div className="mt-1 flex min-w-[33px] flex-row items-center justify-end text-secondary">
      {numIssues > 0 && (
        <>
          <span className="mr-2 text-sm leading-snug">{numIssues}</span>
          <FontAwesomeIcon icon={faComment} />
        </>
      )}
    </div>
  );
};

export const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <li key={issue.url} className="flex flex-row items-start justify-start py-1">
      <span className="w-30 px-2 text-right leading-snug text-secondary">#{issue.number}</span>
      <div className="flex flex-auto flex-row items-start">
        <a
          className="mr-4 block flex-auto leading-snug transition-all hover:text-primary"
          href={issue.url}
          rel="noopener noreferrer"
          target="_blank"
          title="Open issue on GitHub"
        >
          {issue.title}
        </a>
        <IssueCommentNum numIssues={issue.comments_count} />
      </div>
    </li>
  );
};
