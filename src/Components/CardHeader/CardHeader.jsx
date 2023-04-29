import styles from "./CardHeader.module.css";
function CardHeader({ title }) {
  return (
    <div className={styles.cardheader}>
      <h2 className={styles.headertitle}>{title}</h2>
      <div className={styles.cardright}></div>
    </div>
  );
}
export default CardHeader;
