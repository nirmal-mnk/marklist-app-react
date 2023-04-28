import styles from "./Button.module.css";
function Button({ type, label, handleClick }) {
  return (
    <button type={type} className={styles.loginbtn} onClick={handleClick}>
      {label}
    </button>
  );
}
export default Button;
