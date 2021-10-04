export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  has_issues: boolean;
  updated_at: string;
  owner: User;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
}

export interface Issue {
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  state: string;
  locked: boolean;
  assignee: User;
  assignees: User[];
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  body: string;
  labels: Array<Label>;
  pull_request: PullRequest;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}
