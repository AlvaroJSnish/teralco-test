import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { getRepositoryIssues } from "@adapter/repos";
import { Issue } from "@lib/types";
import HomeView from "@views/Home";

export interface HomeProps {
  issues: Issue[] | null;
  error: string | null;
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<HomeProps>> {
  if (!query.repository || !query.username) {
    return {
      props: {
        issues: null,
        error: "Repository and username are required",
      },
    };
  }
  const issues = await getRepositoryIssues({
    repository: query.repository as string,
    username: query.username as string,
    page: parseInt(query.page as string) || 1,
    perPage: parseInt(query.perPage as string) || 10,
  });
  if (!Array.isArray(issues)) {
    return {
      props: {
        issues: null,
        error: issues,
      },
    };
  }
  return {
    props: {
      issues,
      error: null,
    },
  };
}

export default HomeView;
