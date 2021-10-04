import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { getRepositoryIssues } from "@adapter/repos";
import { Issue } from "@lib/types";
import HomeView from "@views/Home";

export interface HomeProps {
  issues: Issue[] | null;
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<HomeProps>> {
  if (!query.repository || !query.username) {
    return {
      props: {
        issues: null,
      },
    };
  }

  const issues = await getRepositoryIssues({
    repository: query.repository as string,
    username: query.username as string,
    page: parseInt(query.page as string) || 1,
    perPage: parseInt(query.perPage as string) || 10,
  });

  return {
    props: {
      issues,
    },
  };
}

export default HomeView;
