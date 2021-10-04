import { useState } from "react";
import Pagination from "@components/Pagination";
import IssueComponent from "@components/Issue";
import Input from "@components/Input";

import { HomeProps } from "pages/[[...params]]";

import Button from "@components/Button";
import RepoNotFound from "@components/RepoNotFound";
import { useRouter } from "next/dist/client/router";
import Modal from "@components/Modal";
import { Issue } from "@lib/types";

import styles from "./styles.module.css";

export default function Home({ issues, error }: HomeProps): JSX.Element {
  const router = useRouter();
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  function handleSelectedIssue(issue: Issue): void {
    setSelectedIssue(issue);
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.innerContainer}>
        <div className="px-4 py-8 sm:px-0">
          <form action="/" className="flex items-center sm:flex-row flex-col">
            <Input
              inputName="username"
              placeholder="Facebook"
              defaultValue={router.query.username as string}
            />
            <Input
              classname="ml-4"
              inputName="repository"
              placeholder="React, React Native..."
              defaultValue={router.query.repository as string}
            />
            <Button type="submit" text="Search" />
          </form>
          {issues && issues.length > 0 ? (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" className={styles.list}>
                  {issues.map((issue) => (
                    <IssueComponent
                      key={issue.id}
                      issue={issue}
                      onClick={handleSelectedIssue}
                    />
                  ))}
                </ul>
              </div>
              <Pagination />
            </div>
          ) : (
            <RepoNotFound error={error} />
          )}
        </div>
      </div>
      <Modal issue={selectedIssue} />
    </div>
  );
}
