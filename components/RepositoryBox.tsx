import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useState } from "react";

import { Repository } from "../types";

type RepositoryBoxProps = {
  repository: Repository;
};

export const RepositoryBox = ({ repository }: RepositoryBoxProps) => {
  const [isIssueOpen, setIsIssueOpen] = useState(false);

  dayjs.extend(relativeTime);
  const lastModified = dayjs(repository.last_modified).fromNow();

  return (
    <div
      id={`repo-${repository.id}`}
      className={`select-none border w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group ${
        isIssueOpen ? "border-juniper hover:bg-ink-400" : "border-ink-200"
      }`}
      onClick={() => setIsIssueOpen(!isIssueOpen)}
    >
      <div className="px-5 py-3">
        <div className="flex flex-row">
          <a
            title={`Open ${repository.owner}/${repository.name} on GitHub`}
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-bold group-hover:text-juniper ${
              isIssueOpen ? "text-juniper" : ""
            }`}
          >
            {repository.owner} / {repository.name}
          </a>
          <span className="flex-1"></span>
          <span
            className={`hidden md:inline text-sm border px-3 py-1 ml-2 rounded-full font-semibold ${
              isIssueOpen ? "text-ink-400 bg-juniper border-transparent" : "text-vanilla-200"
            }`}
          >
            {repository.issues.length}
            {repository.issues.length >= 10 ? "+" : ""} issue
            {repository.issues.length >= 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex-row flex text-sm py-1 overflow-auto">{repository.description}</div>
        <div
          className={`flex-row flex text-sm py-1 font-mono ${
            isIssueOpen ? "text-honey" : "text-vanilla-200"
          }`}
        >
          <div className="mr-4">
            <span className="text-green-600">lang: </span>
            {repository.language.display}
          </div>
          <div className="mr-4">
            <span className="text-blue-600">stars: </span>
            {repository.stars_display}
          </div>
          <div className="mr-4">
            <span className="text-red-600">last activity: </span>
            <span>{lastModified}</span>
          </div>
        </div>
      </div>
      {isIssueOpen && (
        <ol className="px-5 py-3 text-base leading-loose border-t border-ink-200">
          {repository.issues.map((issue) => (
            <li key={issue.url} className="flex flex-row items-start justify-start py-1">
              <span className="text-slate text-right w-30 px-2 leading-snug">#{issue.number}</span>
              <div className="flex items-start flex-row flex-auto">
                <a
                  title="Open issue on GitHub"
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug font-semibold hover:text-juniper text-vanilla-300 block flex-auto"
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
          ))}
        </ol>
      )}
    </div>
  );
};
