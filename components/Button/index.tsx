import styles from "./styles.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
}

export default function Button({ type, text = "" }: ButtonProps): JSX.Element {
  return (
    <div>
      <label htmlFor={type} className={styles.label}>
        Submit
      </label>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </div>
  );
}
