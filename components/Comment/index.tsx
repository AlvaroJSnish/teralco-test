import Image from "next/image";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import { Comment } from "@lib/types";

import styles from "./styles.module.css";

interface CommentProps {
  comment: Comment;
}

export default function CommentComponent({ comment }: CommentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={comment.user.avatar_url}
          alt=""
          width={32}
          height={32}
        />
      </div>
      <div className={styles.comment}>
        <strong>{comment.user.login}</strong>{" "}
        <span className={styles.date}>
          {new Date(comment.created_at).toLocaleDateString()}
        </span>
        <p className={styles.body}>
          <ReactMarkdown remarkPlugins={[gfm]}>{comment.body}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
}
