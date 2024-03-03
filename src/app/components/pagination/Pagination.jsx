"use client";
import React, { useReducer } from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() =>
          router.push(
            `https://react-bike-trails-socialmedia.vercel.app?page=${page - 1}`
          )
        }
      >
        Inapoi
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() =>
          router.push(
            `https://react-bike-trails-socialmedia.vercel.app?page=${page + 1}`
          )
        }
      >
        Inainte
      </button>
    </div>
  );
};

export default Pagination;
