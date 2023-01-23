"use client";

import { useEffect, useCallback } from "react";
import { NextPage } from "next";

import supabase from "../../utils/supabase";

const Categories: NextPage = () => {
  const getCategories = useCallback(async () => {
    let { data: categories, error } = await supabase
      .from("categories")
      .select("name");
    console.info(categories);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <div>categories</div>
    </>
  );
};

export default Categories;
