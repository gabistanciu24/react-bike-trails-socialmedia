import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comentarii</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Adauga un comentariu..."
            className={styles.input}
          />
          <button className={styles.button}>Adauga</button>
        </div>
      ) : (
        <Link href="/login">
          Conecteaza-te pentru a putea scrie un comentariu
        </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>22.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            amet quasi possimus sint veniam facilis delectus repellendus quas
            quidem eveniet! Nobis molestiae consequuntur quam nihil dolorem,
            nulla dicta quae quidem?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>22.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            amet quasi possimus sint veniam facilis delectus repellendus quas
            quidem eveniet! Nobis molestiae consequuntur quam nihil dolorem,
            nulla dicta quae quidem?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>22.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            amet quasi possimus sint veniam facilis delectus repellendus quas
            quidem eveniet! Nobis molestiae consequuntur quam nihil dolorem,
            nulla dicta quae quidem?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>22.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            amet quasi possimus sint veniam facilis delectus repellendus quas
            quidem eveniet! Nobis molestiae consequuntur quam nihil dolorem,
            nulla dicta quae quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
