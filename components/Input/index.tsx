import styles from "./styles.module.css";

export default function Input({
  inputName = "",
  placeholder = "",
  classname = "",
  defaultValue = "",
}) {
  return (
    <div className={classname}>
      <label
        htmlFor={inputName}
        className="block text-sm font-medium text-gray-700"
      >
        {inputName}
      </label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
