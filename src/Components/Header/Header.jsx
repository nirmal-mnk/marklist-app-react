import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <img src={require("../../assets/logo.png")} alt="Logo" />
        </div>
        <div className={styles.hamburger}>
          <img src={require("../../assets/hamburger.png")} alt="Hamburger" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <p className={styles.profileName}>Nirmal</p>
        <div className={styles.profilePic}>
          <img
            src={require("../../assets/user-profile.png")}
            alt="User Profile"
          />
        </div>
        <div className={styles.dropdownBtn}>
          <img src={require("../../assets/down.png")} alt="Dropdown Icon" />
        </div>
      </div>
    </div>
  );
}
export default Header;
