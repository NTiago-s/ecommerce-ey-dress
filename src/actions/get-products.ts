"use server";

import { GetProductsQuery } from "@/utils/querys";

export async function GetProducts() {
  const token = process.env.STRAPI_TOKEN_PRODUCTION;
  const response = await fetch(`${GetProductsQuery}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const { data } = await response.json();
  console.log({ data });

  const products = data.map((product: any) => {
    const { name, price, stock, id, productID } = product;

    const firstImage = stock?.flatMap((item: any) => item.images)?.[0];

    return {
      name,
      id,
      price,
      productID,
      image: firstImage?.url || null,
    };
  });
  console.log({ products });

  return { products };
}
