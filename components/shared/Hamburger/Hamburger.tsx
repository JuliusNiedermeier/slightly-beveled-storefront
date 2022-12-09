import styles from "./Hamburger.module.css";

export const Hamburger = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.bottom} />
    </div>
  );
};
