"use client";

import { useState, useEffect, useCallback } from "react";
import { NextPage } from "next";
import { Select } from "antd";

import supabase from "@/utils/supabase";
import { categoryAtom } from "@/context/state";
import { useAtom } from "jotai";

interface Category {
  value: string;
  label: string;
}

const Categories: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useAtom(categoryAtom);

  const getCategories = useCallback(async () => {
    let { data } = await supabase.from("categories").select("name");

    const loadedCategories: Category[] = data!.map((category) => ({
      value: category.name,
      label: category.name,
    }));
    setCategories(loadedCategories);
    setSelectedCategory(loadedCategories[0].label);
  }, [setSelectedCategory]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleChange = (category: string) => {
    setSelectedCategory(category);
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
