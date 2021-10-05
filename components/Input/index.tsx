import styles from "./styles.module.css";

interface InputProps {
  inputName: string;
  placeholder: string;
  classname?: string;
  defaultValue?: string;
  id?: string;
}

export default function Input({
  inputName,
  placeholder,
  classname,
  defaultValue,
  id,
}: InputProps) {
  return (
    <div className={classname}>
      <label htmlFor={inputName} className={styles.label}>
        {inputName}
      </label>
      <input
        type="text"
        name={inputName}
        className={`${styles.input}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
      />
    </div>
  );
}
