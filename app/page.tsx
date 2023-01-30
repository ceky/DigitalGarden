"use client";

import "@/styles/reset.css";
import styles from "./page.module.css";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <>
      <h2 className={styles.header}>
        A collection of things that I enjoyed from the frontend world
      </h2>
      <Posts />
    </>
  );
}
