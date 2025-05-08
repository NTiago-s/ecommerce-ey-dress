"use server";

import { GetCategoriesQuery } from "@/utils/querys";

export async function GetCategories() {
  const token = process.env.STRAPI_TOKEN;

  const response = await fetch(`${GetCategoriesQuery}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();

  const categoriesMap = data.map((category: any) => {
    const { name, id } = category;

    return {
      id,
      name,
    };
  });

  return { categoriesMap };
}
