"use client";

import { NextPage } from "next";
import { useAtom } from "jotai";
import supabase from "@/utils/supabase";
import { categoryAtom } from "@/context/state";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";

interface Post {
  id: number;
  created_at: string;
  title: string;
  description: string;
  link: string;
}

const Posts: NextPage = () => {
  const [selectedCategory] = useAtom(categoryAtom);
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = useCallback(async () => {
    let { data } = await supabase
      .from(selectedCategory.toLowerCase())
      .select("*");
    console.log(JSON.stringify(data));
    setPosts(data as Post[]);
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedCategory.length) return;

    loadPosts();
  }, [loadPosts, selectedCategory]);

  const handlePostClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return (
    <div>
      <h1 className={styles.selectedCategory}>{selectedCategory}</h1>
      {posts.length > 0 && (
        <ul className={styles.postsContainer}>
          {posts.map((post) => (
            <li
              className={styles.post}
              key={post.id}
              onClick={() => handlePostClick(post.link)}
            >
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
