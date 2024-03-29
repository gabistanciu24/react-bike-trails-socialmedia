import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/biketrails.png"
            alt="bike trails logo"
            width={65}
            height={65}
          />
          <h1 className={styles.logoText}>BikeTrails</h1>
        </div>
        <p className={styles.desc}>
          Explorează vârfurile și potecile noastre montane. Bucură-te de fiecare
          pedalare și lasă-te purtat de frumusețea naturii înconjurătoare.
          Alătură-te comunității noastre de pasionați și descoperă senzațiile
          unice pe care le oferă călătoriile cu bicicleta în munți.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Acasa</Link>
          <Link href="/">Trasee</Link>
          <Link href="/">Despre</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categorii</span>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
          <Link href="/">Culture</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
