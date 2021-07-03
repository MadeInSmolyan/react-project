import styles from "./InputError.module.css";

const InputError = ({ children }) => {
  if (!children) {
    return null;
  }

  return <div className={styles.input_error}>{children}</div>;
};

export default InputError;
