import styles from "./Button.module.css";
function Button({ type, label, handleClick, btnstyle }) {
  return (
    <button type={type} className={`${styles[btnstyle]}`} onClick={handleClick}>
      {label}
    </button>
  );
}
export default Button;
