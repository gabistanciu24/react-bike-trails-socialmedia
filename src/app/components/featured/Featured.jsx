import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Pedalând Pe Culmi</b> Împărtășește Traseele Tale Montane
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/enduro.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolores consequatur sunt, maiores quibusdam vero hic porro dolorem
            ab unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto dolores consequatur sunt, maiores quibusdam vero hic
            porro dolorem ab unde.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
