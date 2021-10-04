import styles from "./styles.module.css";

interface InputProps {
  inputName: string;
  placeholder: string;
  classname?: string;
  defaultValue?: string;
}

export default function Input({
  inputName,
  placeholder,
  classname,
  defaultValue,
}: InputProps) {
  return (
    <div className={classname}>
      <label htmlFor={inputName} className={styles.label}>
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
