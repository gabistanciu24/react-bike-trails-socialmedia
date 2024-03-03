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
          <Image
            src="/biketrails2.png"
            alt=""
            className={styles.image}
            width={450}
            height={450}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Explorând Înălțimile Naturii</h1>
          <p className={styles.postDesc}>
            Explorează vârfurile și potecile noastre montane. Bucură-te de
            fiecare pedalare și lasă-te purtat de frumusețea naturii
            înconjurătoare. Alătură-te comunității noastre de pasionați și
            descoperă senzațiile unice pe care le oferă călătoriile cu bicicleta
            în munți
          </p>
          <button className={styles.button}>Despre</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
