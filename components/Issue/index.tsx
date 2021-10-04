import Image from "next/image";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { Issue } from "@lib/types";

import styles from "./styles.module.css";

interface IssueProps {
  issue: Issue;
}

export default function IssueComponent({ issue }: IssueProps) {
  return (
    <li>
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
                    Applied on{" "}
                    <time dateTime={issue.updated_at}>{issue.updated_at}</time>
                  </p>
                  <p className={styles.state}>
                    <CheckCircleIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    {issue.state}
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
