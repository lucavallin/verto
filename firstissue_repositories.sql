SELECT ghe.repo_name AS repo_name
--      , stars
--      , contributors
--      , groupArray(concat('https://github.com/', repo_name, '/issues/', toString(number))) as issues
--      , count(number)                                                                      as number_of_good_first_issues
FROM github_events AS ghe
         INNER JOIN (SELECT repo_name
                          , sum(event_type = 'WatchEvent')                                             AS stars
                          -- This is an approximate calculation of the number of contributors in the repository -
                          -- the number of unique authors who have merged PRs.
                          -- The number is not exact, but it is close to the truth.
                          -- We cannot get an exact number because the database does not store information about commits
                          , uniqIf(creator_user_login, event_type = 'PullRequestEvent' AND merged = 1) AS contributors
                     FROM github_events
                     WHERE event_type IN ('WatchEvent', 'PullRequestEvent')
                     GROUP BY repo_name
                     HAVING stars >= 1000
                        AND contributors >= 10
    ) AS popular_repos ON popular_repos.repo_name = ghe.repo_name
         INNER JOIN (SELECT repo_name,
                            max(created_at) AS last_update
                     FROM github_events
                     WHERE event_type = 'PushEvent'
                     GROUP BY repo_name
                     HAVING last_update > now() - interval 1 MONTH
    ) AS uptodate_repos ON uptodate_repos.repo_name = ghe.repo_name
WHERE 1 = 1
  AND event_type = 'IssuesEvent'
  AND arrayExists(label -> multiMatchAny(
        label, [
            '^good[ -_]first[ -_]issue$',
            '^(E-)?help[ -_]wanted$',
            '^E-easy$' -- specific to rust repositories
            ]
    ), labels)
  AND action = 'opened'
GROUP BY repo_name,
         stars,
         contributors
HAVING count(number) > 3
ORDER BY
--     number_of_good_first_issues desc,
--     stars desc
    repo_name
FORMAT CSV