import styles from "./styles.module.css";

export default function Input({
  inputName = "",
  placeholder = "",
  classname = "",
}) {
  return (
    <div className={classname}>
      <label
        htmlFor={inputName}
        className="block text-sm font-medium text-gray-700"
      >
        Username
      </label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}
