// Describes a Tag, which is a programming language
export interface Tag {
  count: number
  language: string
}

// Describes a Repository, which is a GitHub repository
export interface Repository {
  description: string
  id: string
  issues: Issue[]
  language: string
  last_modified: string
  name: string
  owner: string
  stars: number
  url: string
}

// Describes an Issue, which is a GitHub issue linked to a repository
export interface Issue {
  comments_count: number
  number: number
  title: string
  url: string
}

// Describes the data that is retrieved from the GitHub API and used by the app
export interface AppData {
  repos: Repository[]
  tags: Tag[]
}
