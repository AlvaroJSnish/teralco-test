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
  comments_url: string;
  comments_list: Array<Comment>;
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}

export interface Comment {
  id: number;
  node_id: string;
  user: User;
  created_at: string;
  updated_at: string;
  body: string;
}
