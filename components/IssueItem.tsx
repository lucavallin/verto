import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Issue } from "../types";

type IssueItemProps = {
  issue: Issue;
};

type IssueCommentNumProps = {
  numIssues: number;
};

const IssueCommentNum = ({ numIssues }: IssueCommentNumProps) => {
  return (
    <div className="flex flex-row items-center justify-end mt-1 w-10 text-slate">
      <span className="mr-2 text-sm leading-snug">{numIssues}</span>
      <FontAwesomeIcon icon={faComment} />
    </div>
  );
};

export const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <li key={issue.url} className="flex flex-row items-start justify-start py-1">
      <span className="text-slate text-right w-30 px-2 leading-snug">#{issue.number}</span>
      <div className="flex items-start flex-row flex-auto">
        <a
          className="break-all mr-4 leading-snug hover:text-juniper block flex-auto"
          href={issue.url}
          rel="noopener noreferrer"
          target="_blank"
          title="Open issue on GitHub"
        >
          {issue.title}
        </a>
        {issue.comments_count > 0 && <IssueCommentNum numIssues={issue.comments_count} />}
      </div>
    </li>
  );
};
