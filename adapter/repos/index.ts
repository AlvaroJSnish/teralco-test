import { Issue, Repository } from "@lib/types";

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
}: getRepositoryIssuesProps): Promise<Array<Issue>> {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repository}/issues?per_page=${perPage}&page=${page}`
  );
  const json = await response.json();

  return json;
}
