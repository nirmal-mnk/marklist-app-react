import styles from "./CardHeader.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchStudentByName } from "../../Features/Actions/ActionCreator";
import { useEffect } from "react";
function CardHeader({ title }) {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const onChangeSearchSubmit = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchName) {
      setSearchName(e.target.value);
      setSearchName("");
    }
  };
  useEffect(() => {
    if (searchName) {
      dispatch(searchStudentByName(searchName));
    }
  }, [searchName]);
  return (
    <div className={styles.cardheader}>
      <h2 className={styles.headertitle}>{title}</h2>
      <div className={styles.cardright}>
        <form onSubmit={(e) => handleSearchSubmit(e)}>
          <input
            type="search"
            value={searchName}
            className={styles.searchStudent}
            placeholder="Search Student by Name"
            onChange={(e) => onChangeSearchSubmit(e)}
          />
          {/* <p className={styles.searchErr}>Student Does not Exist</p> */}
        </form>
      </div>
    </div>
  );
}
export default CardHeader;
