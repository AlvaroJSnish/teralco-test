import { useRouter } from "next/dist/client/router";

import Pagination from "@components/Pagination";
import IssueComponent from "@components/Issue";
import Input from "@components/Input";

import { HomeProps } from "pages/[[...params]]";

import styles from "./styles.module.css";
import Button from "@components/Button";
import RepoNotFound from "@components/RepoNotFound";

export default function Home({ issues }: HomeProps): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.innerContainer}>
        <div className="px-4 py-8 sm:px-0">
          <form action="/" className="flex flex-row items-center">
            <Input inputName="username" placeholder="Facebook" />
            <Input
              classname="ml-4"
              inputName="repository"
              placeholder="React, React Native..."
            />
            <Button type="submit" text="Search" />
          </form>
          {issues && issues.length > 0 ? (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" className={styles.list}>
                  {issues.map((issue) => (
                    <IssueComponent key={issue.id} issue={issue} />
                  ))}
                </ul>
              </div>
              <Pagination />
            </div>
          ) : (
            <RepoNotFound />
          )}
        </div>
      </div>
    </div>
  );
}
