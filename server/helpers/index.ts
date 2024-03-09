import { Repository, RepositorySortOrder } from "types";

function checkTags(repo: Repository, tags: string[]) {
  return repo.tags ? repo.tags.some((tag) => tags.includes(tag.display)) : false;
}

function chekRepoByNameDescTags(repo: Repository, search: string, tags: string[]) {
  return (
    repo.name.toLowerCase().includes(search.toLowerCase()) ||
    checkTags(repo, tags) ||
    (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
  );
}

function sortRepo(cur: Repository, next: Repository, sort: RepositorySortOrder) {
  if (sort === RepositorySortOrder.NEW_ISSUES) {
    const currentNewestIssue = cur.issues.reduce((acc, issue) => {
      return new Date(issue.created_at).getTime() > new Date(acc.created_at).getTime()
        ? issue
        : acc;
    }, cur.issues[0]);
    const nextNewestIssue = next.issues.reduce((acc, issue) => {
      return new Date(issue.created_at).getTime() > new Date(acc.created_at).getTime()
        ? issue
        : acc;
    }, next.issues[0]);
    const timestampDiff =
      new Date(nextNewestIssue.created_at).getTime() -
      new Date(currentNewestIssue.created_at).getTime();
    return timestampDiff;
  }
  if (sort === RepositorySortOrder.MOST_STARS) {
    return next.stars - cur.stars;
  }
  if (sort === RepositorySortOrder.LEAST_STARS) {
    return cur.stars - next.stars;
  }
  return 0;
}

export { checkTags, chekRepoByNameDescTags, sortRepo };
