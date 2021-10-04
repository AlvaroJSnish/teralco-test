import React, { Fragment, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { Comment, Issue } from "@lib/types";
import Loading from "@components/Loading";

import styles from "./styles.module.css";

interface ModalProps {
  issue: Issue | null;
}

export default function Modal({ issue }: ModalProps) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<Array<Comment> | string>([]);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    setOpen(issue !== null);

    if (issue) {
      (async function () {
        setLoadingComments(true);
        const response = await fetch(`${issue.comments_url}`);
        const comments = await response.json();
        setComments(comments);
        setLoadingComments(false);
      })();
    }
  }, [issue]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={setOpen}>
        <div className={styles.container}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={styles.dialogOverlay} />
          </Transition.Child>
          <span className={styles.hiddenSpan} aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={styles.content}>
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className={styles.title}>
                    {issue?.title}
                  </Dialog.Title>
                  <span className={styles.type}>
                    {issue?.pull_request ? "Pull request" : "issue"}
                  </span>
                  <div className="mt-2">
                    <p className={styles.body}>{issue?.body}</p>
                  </div>
                  <div>{loadingComments ? <Loading /> : null}</div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setOpen(false)}
                >
                  Go back to issues
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
