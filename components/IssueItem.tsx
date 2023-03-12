import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Issue } from "../types";

type IssueItemProps = {
  issue: Issue;
};

export const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <li key={issue.url} className="flex flex-row items-start justify-start py-1">
      <span className="text-slate text-right w-30 px-2 leading-snug">#{issue.number}</span>
      <div className="flex items-start flex-row flex-auto">
        <a
          className="leading-snug font-semibold hover:text-juniper text-vanilla-300 block flex-auto"
          href={issue.url}
          rel="noopener noreferrer"
          target="_blank"
          title="Open issue on GitHub"
        >
          {issue.title}
        </a>
        {issue.comments_count > 0 && (
          <div className="flex flex-row items-center justify-end mt-1 w-10">
            <span className="mr-2 text-sm leading-snug">{issue.comments_count}</span>
            <FontAwesomeIcon icon={faComment} />
          </div>
        )}
      </div>
    </li>
  );
};
