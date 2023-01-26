"use client";

import "@/styles/reset.css";
import styles from "./page.module.css";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Home page</h1>
      <Posts />
    </>
  );
}
