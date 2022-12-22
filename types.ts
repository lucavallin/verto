export interface Tag {
  language: string
  count: number
}

export interface Repository {
  id: string
  name: string
  owner: string
  url: string
  issues: Issue[]
  stars: number
  language: string
  last_modified: string
}

export interface Issue {
  url: string
  number: number
  title: string
  comments_count: number
}
