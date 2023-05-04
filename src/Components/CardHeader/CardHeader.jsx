import styles from "./CardHeader.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchStudentByName } from "../../Features/Actions/ActionCreator";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
function CardHeader({ title, approle }) {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
      <div className={styles.cardHeaderLeft}>
        {pathname === "/marklist" || pathname === "/add-student" ? (
          <button className="iconbtn" onClick={() => navigate("/dashboard")}>
            <img src={require("../../assets/go-back-btn.png")} alt="" />
          </button>
        ) : null}

        <h2 className={styles.headertitle}>{title}</h2>
      </div>

      {pathname === "/marklist" && (
        <div className={styles.cardright}>
          <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input
              type="search"
              value={searchName}
              className={styles.searchStudent}
              placeholder="Search Student by Name"
              onChange={(e) => onChangeSearchSubmit(e)}
            />
          </form>
          {/* <p className={styles.searchErr}>Student Does not Exist</p> */}
        </div>
      )}
      {pathname === "/dashboard" && (
        <div className={styles.addStudentAction}>
          {approle === "admin" && (
            <Button
              type="button"
              label="Add New Student"
              btnstyle="routingbtn"
              handleClick={() => navigate("/add-student")}
            />
          )}

          <Button
            type="button"
            label="Marklist"
            btnstyle="routingbtn"
            handleClick={() => navigate("/marklist")}
          />
        </div>
      )}
    </div>
  );
}
export default CardHeader;
