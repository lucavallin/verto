import {repositories, labels} from '../gfi.config.json'
import { AppData, Repository } from '../types'
import { Octokit } from "@octokit/rest";

export const getRepositoryData: AppData = () => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAT
    });

    let repositoriesToQuery = repositories
    const issueLimit = 10
    const tmpTags = []
    const slugifyReplacements = [["#", "sharp"], ["+", "plus"]]

    // Take only the first 10 repositories in development,
    // otherwise we make GitHub unhappy
    if (process.env.NODE_ENV === 'development') {
        repositoriesToQuery = repositories.slice(0, 10)
    }

    repositoriesToQuery.map((r) => {
        const [owner, repo] = r.split('/')
        octokit.repos.get({ owner, repo }).then((response) => {
            const { data: repository } = response

            // Skip repos that are archived, disabled, private, or have no language, or have less than 100 stars, or have less than 3 open issues
            if (
                repository.archived
                || repository.disabled
                || repository.private
                || !repository.language
                || repository.stargazers_count < 100
                || repository.open_issues_count < 3
            ) {
                console.log(`Skipping repository: ${repo}`)
                return
            }

            const issues = octokit.issues.listForRepo({
                owner,
                repo,
                labels: labels.join(','),
                state: "open",
                sort: "created",
                direction: "desc",
                per_page: issueLimit,
            }).then((response) => {
                const { data: issues } = response

                // Skip repos that have no issues with the labels we want
                if issues.length == 0 return

                const thing: Repository = {
                    name: repository.name,
                    owner: repository.owner.login,
                    description: repository.description,
                    language: repository.language,
                    // slug: slugify(data.language, replacements=slugifyReplacements),
                    url: repository.html_url,
                    stars: repository.stargazers_count,
                    // stars_display: data.stargazers_count, (numerize)
                    last_modified: repository.pushed_at,
                    id: repository.id,
                    issues: issues.map((issue) => {
                        return {
                            title: issue.title,
                            url: issue.html_url,
                            number: issue.number,
                            comments_count: issue.comments,
                            created_at: issue.created_at,
                        }
                    }
                }

                tmpTags[data.language]++
            })
        })
    })

    // TODO shuffle repos order?
    // TODO sort tags by count desc
    const tags = tmpTags.filter((language, count) => count > 3).reduce((tags, tag) => ({
        language: tag.language
        count: tag.count
        // slug: slugify(key, replacements=SLUGIFY_REPLACEMENTS),
    }), [])

    return {
        repos: [],
        tags: []
    }
}
