// Nullable generic for nullable fields
type Nullable<T> = T | null;

// Describes a Tag, which is a programming language or a topic
export interface Tag {
  display: Nullable<string>;
  id: string;
}

// Describes a CountableTag, which is a Tag with a count
export interface CountableTag extends Tag {
  count: number;
}

// Describes a Repository, which is a GitHub repository
export interface Repository {
  description: Nullable<string>;
  id: number;
  issues: Issue[];
  language: Tag;
  last_modified: string;
  license?: string;
  name: string;
  owner: string;
  stars: number;
  stars_display: string;
  url: string;
  topics?: Tag[];
}

// Describes an Issue, which is a GitHub issue linked to a repository
export interface Issue {
  comments_count: number;
  created_at: string;
  id: number;
  number: number;
  title: string;
  url: string;
}

// Describes the data that is retrieved from the GitHub API and used by the app
export interface AppData {
  repositories: Repository[];
  languages: CountableTag[];
  topics: CountableTag[];
}
