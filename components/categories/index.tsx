"use client";

import { useState, useEffect, useCallback } from "react";
import { NextPage } from "next";
import { Select } from "antd";

import supabase from "../../utils/supabase";

interface Category {
  value: string;
  label: string;
}

const Categories: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = useCallback(async () => {
    let { data } = await supabase.from("categories").select("name");

    const loadedCategories: Category[] = data!.map((category) => ({
      value: category.name,
      label: category.name,
    }));
    setCategories(loadedCategories);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleChange = (category: string) => {
    console.info(category);
  };

  if (!categories.length) return null;

  return (
    <Select
      style={{ width: 120 }}
      defaultValue={categories[0].value}
      onChange={(category) => handleChange(category)}
      options={categories}
    />
  );
};

export default Categories;
