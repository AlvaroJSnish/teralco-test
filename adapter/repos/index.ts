import { Issue } from "@lib/types";

interface getRepositoryIssuesProps {
  repository: string;
  username: string;
  perPage: number;
  page: number;
}

export async function getRepositoryIssues({
  repository,
  username,
  perPage = 10,
  page = 1,
}: getRepositoryIssuesProps): Promise<Array<Issue> | string> {
  const ghToken = process.env.GITHUB_TOKEN
    ? `access_token=${process.env.GITHUB_TOKEN}`
    : "";
  const url = `https://api.github.com/repos/${username}/${repository}/issues?per_page=${perPage}&page=${page}&${ghToken}`;

  const response = await fetch(url);
  const json = await response.json();

  if (json.message) {
    return json.message;
  }

  return json;
}
