"use client";

import "@/styles/reset.css";
import styles from "./page.module.css";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <>
      <h2 className={styles.header}>
        A collection of things that I enjoyed watching, reading or listening to
        over time
      </h2>
      <Posts />
    </>
  );
}
