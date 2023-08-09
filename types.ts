// Nullable generic for nullable fields
type Nullable<T> = T | null;

// Describes a Tag, which is a programming language or a topic
export interface Tag {
  display: string;
  id: string;
}

// Describes a CountableTag, which is a Tag with a count
export interface CountableTag extends Tag {
  count: number;
}

// Describes a Repository, which is a GitHub repository
export interface Repository {
  description: Nullable<string>;
  has_new_issues: boolean;
  id: string;
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
  id: string;
  labels: Label[];
  number: number;
  title: string;
  url: string;
}

// Describes a Label, which is a GitHub label
export interface Label {
  id: string;
  display: string;
}

export enum RepositorySortOrder {
  LEAST_STARS = "By Least Stars",
  MOST_STARS = "By Most Stars",
  NONE = "None"
}

// Describes the data that is retrieved from the GitHub API and used by the app
export interface AppData {
  languages: CountableTag[];
  repositories: Repository[];
  repositorySortOrder: RepositorySortOrder;
  topics: CountableTag[];
  updateRepositorySortOrder: (sortOrder: RepositorySortOrder) => void;
}
