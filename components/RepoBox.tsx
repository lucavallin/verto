import React, { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Repository } from '../types'

type RepoBoxProps = {
  repo: Repository
}

export const RepoBox = ({ repo }: RepoBoxProps) => {
  const [isIssueOpen, setIsIssueOpen] = useState(false)
  const [activeIssue, setActiveIssue] = useState(null)
  const lastModified = dayjs(repo.last_modified).fromNow()

  return (
    <div
      id={`repo-${repo.id}`}
      className={`select-none border w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group ${
        isIssueOpen ? 'border-juniper hover:bg-ink-400' : 'border-ink-200'
      }`}
      onClick={() => setIsIssueOpen(!isIssueOpen)}
    >
      <div className="px-5 py-3">
        <div className="flex flex-row">
          <a
            title={`Open ${repo.owner}/${repo.name} on GitHub`}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-bold group-hover:text-juniper ${
              isIssueOpen ? 'text-juniper' : ''
            }`}
          >
            {repo.owner} / {repo.name}
          </a>
          <span className="flex-1"></span>
          <span
            className={`hidden md:inline text-sm border px-3 py-1 ml-2 rounded-full font-semibold ${
              isIssueOpen ? 'text-ink-400 bg-juniper border-transparent' : 'text-vanilla-200'
            }`}
          >
            {repo.issues.length} issue(s)
          </span>
        </div>
        <div className="flex-row flex text-sm py-1 overflow-auto">{repo.description}</div>
        <div
          className={`flex-row flex text-sm py-1 font-mono ${
            isIssueOpen ? 'text-honey' : 'text-vanilla-200'
          }`}
        >
          <div className="mr-4">
            <span className="text-green-600">lang: </span>
            {repo.language}
          </div>
          <div className="mr-4">
            <span className="text-blue-600">stars: </span>
            {repo.stars}
          </div>
          <div className="mr-4">
            <span className="text-red-600">last activity: </span>
            <span>{lastModified}</span>
          </div>
        </div>
      </div>
      {isIssueOpen && (
        <ol className="px-5 py-3 text-base leading-loose border-t border-ink-200">
          {repo.issues.map((issue) => (
            <li key="issue.url" className="flex flex-row items-start justify-start py-1">
              <span className="text-slate text-right px-2 leading-snug" style="min-width: 70px">
                #{issue.number}
              </span>
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
                    {/* <message-square-icon size="0.8x" className="mt-px" /> */}
                    <span className="ml-1 text-sm leading-snug">
                      {issue.comments_count} comment(s)
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
