import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import styles from "./styles.module.css";

export default function Pagination() {
  const router = useRouter();
  return (
    <nav className={styles.nav} aria-label="Pagination">
      <div className={styles.pageContainer}>
        <p className={styles.pageText}>
          {router.query?.page ? (
            <span className="font-medium">Page {router.query.page}</span>
          ) : (
            <span className="font-medium">Page 1</span>
          )}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        {parseInt(router.query.page as string) > 1 && (
          <Link
            href={`/?username=${router.query.username}&repository=${
              router.query.repository
            }&page=${(parseInt(router.query.page as string) || 1) - 1}`}
          >
            <a id="previous-page-button" className={styles.button}>
              Previous
            </a>
          </Link>
        )}
        <Link
          href={`/?username=${router.query.username}&repository=${
            router.query.repository
          }&page=${(parseInt(router.query.page as string) || 1) + 1}`}
        >
          <a id="next-page-button" className={`ml-3 ${styles.button}`}>
            Next
          </a>
        </Link>
      </div>
    </nav>
  );
}
