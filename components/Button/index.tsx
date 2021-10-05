import styles from "./styles.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  classname?: string;
}

export default function Button({
  type,
  text = "",
  classname,
}: ButtonProps): JSX.Element {
  return (
    <div className={classname}>
      <label htmlFor={type} className={styles.label}>
        Submit
      </label>
      <button className={styles.button} type={type} id="search-repo-button">
        {text}
      </button>
    </div>
  );
}
