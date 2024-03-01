import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>MONTAN</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod
          beatae saepe asperiores consectetur neque, eaque voluptate facilis
          similique sed porro vitae architecto quaerat aperiam voluptatem
          sapiente, libero corporis animi?
        </p>
        <Link href="/" className={styles.link}>
          Vizualizare traseu.
        </Link>
      </div>
    </div>
  );
};
