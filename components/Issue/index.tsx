import Image from "next/image";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChatAlt2Icon,
  XCircleIcon,
  BackspaceIcon,
  RefreshIcon,
} from "@heroicons/react/solid";

import { Issue } from "@lib/types";

import styles from "./styles.module.css";

interface IssueProps {
  issue: Issue;
  onClick: (issue: Issue) => void;
}

export default function IssueComponent({ issue, onClick }: IssueProps) {
  return (
    <li onClick={() => onClick(issue)}>
      <a href="#" className={styles.listLink}>
        <div className={styles.listLinkContainer}>
          <div className={styles.listLinkInnerContainer}>
            <div className={styles.linkImageContainer}>
              <Image
                className={styles.linkImage}
                src={issue.user.avatar_url}
                alt=""
                height={42}
                width={42}
              />
            </div>
            <div className={styles.infoContainer}>
              <div>
                <p className={styles.title}>{issue.title}</p>
                <p className={styles.subtitle}>
                  <span className="truncate">{issue.user.login}</span>
                </p>
              </div>
              <div className={styles.subinfo}>
                <div>
                  <p className={styles.date}>
                    Created on{" "}
                    <time dateTime={issue.created_at}>
                      {new Date(issue.created_at).toLocaleDateString()}
                    </time>
                  </p>
                  <p className={styles.state}>
                    {issue.state === "open" ? (
                      <>
                        <CheckCircleIcon
                          className={`${styles.icon} text-green-400`}
                          aria-hidden="true"
                        />
                        <span className="mr-4">{issue.state}</span>
                      </>
                    ) : (
                      <>
                        <XCircleIcon
                          className={`${styles.icon} text-red-400`}
                          aria-hidden="true"
                        />
                        <span className="mr-4">{issue.state}</span>
                      </>
                    )}
                    <ChatAlt2Icon className={styles.icon} aria-hidden="true" />
                    <span className="mr-4">{issue.comments}</span>
                    {!issue.pull_request ? (
                      <>
                        <BackspaceIcon
                          className={styles.icon}
                          aria-hidden="true"
                        />
                        <span className="mr-4">issue</span>
                      </>
                    ) : (
                      <>
                        <RefreshIcon
                          className={styles.icon}
                          aria-hidden="true"
                        />
                        <span className="mr-4">pull request</span>
                      </>
                    )}
                    <div className={styles.labels}>
                      {issue.labels.map((label) => (
                        <span
                          key={label.id}
                          className={`${styles.label} mr-4`}
                          style={{
                            color: `#${label.color}`,
                          }}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </li>
  );
}
