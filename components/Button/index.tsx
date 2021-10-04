import styles from "./styles.module.css";

export default function Button({ type, text = "" }) {
  return (
    <div>
      <label
        htmlFor="submit"
        className="block text-sm font-medium text-gray-700 sr-only"
      >
        Submit
      </label>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </div>
  );
}
