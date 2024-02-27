import React from "react";
import styles from "./traseePage.module.css";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

const Trasee = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style | Trasee</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Trasee;
