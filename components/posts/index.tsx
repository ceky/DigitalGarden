"use client";

import { NextPage } from "next";
import { useAtom } from "jotai";
import supabase from "@/utils/supabase";
import { categoryAtom } from "@/context/state";
import { useCallback, useEffect } from "react";

const Posts: NextPage = () => {
  const [selectedCategory] = useAtom(categoryAtom);

  const loadPosts = useCallback(async () => {
    let { data } = await supabase
      .from(selectedCategory.toLowerCase())
      .select("*");
    console.log(JSON.stringify(data));
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedCategory.length) return;

    loadPosts();
  }, [loadPosts, selectedCategory]);

  return <div>{selectedCategory}</div>;
};

export default Posts;
