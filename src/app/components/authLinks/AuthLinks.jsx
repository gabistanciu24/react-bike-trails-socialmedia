"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  //temporary
  const { status } = "authenticated";

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Traseu
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Acasa</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Despre</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Traseu</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
