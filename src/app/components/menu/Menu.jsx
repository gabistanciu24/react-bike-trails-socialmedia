import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Ceva nou</h2>
      <h1 className={styles.title}>Trasee Populare</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Exploreaza tipurile</h2>
      <h1 className={styles.title}>Categorii</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Recomandari</h2>
      <h1 className={styles.title}>Pe unde s-o apuc?</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
