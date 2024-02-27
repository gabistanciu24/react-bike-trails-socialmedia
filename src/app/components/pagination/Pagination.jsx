import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Inapoi</button>
      <button className={styles.button}>Inainte</button>
    </div>
  );
};

export default Pagination;
