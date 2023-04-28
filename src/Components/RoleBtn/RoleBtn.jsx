import styles from "./RoleBtn.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_ROLE } from "../../Features/Reducers/loginReducer";
function RoleBtn({ getRole }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleToggle = (event) => {
    setToggle(event.target.value === "true");
    // dispatch({ type: LOGIN_ROLE, toggle });
    if (toggle) {
      getRole("student");
    } else {
      getRole("admin");
    }
  };

  return (
    <div className={styles.roleBtns}>
      <input
        id="toggle-on"
        className={`${styles.toggle} ${styles.toggleLeft}`}
        name="toggle"
        value="false"
        type="radio"
        checked={!toggle}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-on" className={styles.btn}>
        Student
      </label>
      <input
        id="toggle-off"
        className={`${styles.toggle} ${styles.toggleRight}`}
        name="toggle"
        value="true"
        type="radio"
        checked={toggle}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-off" className={styles.btn}>
        Admin
      </label>
    </div>
  );
}
export default RoleBtn;
