// Nullable generic for nullable fields
type Nullable<T> = T | null;

export interface Source {
  name: string;
  provider: "github" | "gitlab";
  url?: string;
  repositories: string[];
  labels: string[];
}

// Describes a Tag, which is a programming language or a tag
export interface Tag {
  display: string;
  id: string;
}

// Describes a CountableTag, which is a Tag with a count
export interface CountableTag extends Tag {
  count: number;
}

export interface CountableLanguage extends Tag {
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
  tags?: Tag[];
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
  NEW_ISSUES = "New Issues",
  LEAST_STARS = "By Least Stars",
  MOST_STARS = "By Most Stars",
  NONE = "None"
}

// Describes the data that is retrieved from the GitHub API and used by the app
export interface AppData {
  languages: CountableLanguage[];
  repositories: Repository[];
  repositorySortOrder: RepositorySortOrder;
  tags: CountableTag[];
  query: string;
  updateRepositorySortOrder: (sortOrder: RepositorySortOrder) => void;
}

export interface GitLabRepository {
  id: string;
  name: string;
  description: string;
  starCount: number;
  openIssuesCount: number;
  lastActivityAt: string;
  webUrl: string;
  namespace: {
    fullName: string;
  };
  group: {
    fullName: string;
  };
  languages: {
    name: string;
    share: number;
  }[];
  topics: string[];
  issues: {
    nodes: {
      iid: string;
      webUrl: string;
      title: string;
      createdAt: string;
      labels: {
        nodes: {
          title: string;
        }[];
      };
    }[];
  };
}

export interface Data {
  repositories: Repository[];
  languages: CountableLanguage[];
  tags: CountableTag[];
}

export interface InputProps {
  placeholder?: string;
  name?: string;
  id?: string;
}

export type AuthSubmitButtonVariant = "toggle_signup" | "toggle_signin" | "auth_github";

export interface IUserPublicData {
  email: string;
  username: string;
}
export interface IUser extends IUserPublicData {
  password: string;
}

export type IUserCredentials = Pick<IUser, "email" | "password">;
