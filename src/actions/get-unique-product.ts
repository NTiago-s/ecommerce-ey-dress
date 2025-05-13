"use server";
import { GetProductByIdQuery } from "@/utils/querys";

export async function GetProductById(productID: string) {
  const token = process.env.STRAPI_TOKEN_PRODUCTION;

  const response = await fetch(`${GetProductByIdQuery}${productID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();
  const product = data?.[0];

  if (!product) return null;

  const { name, price, id, stock, description } = product;

  const stockWithImages =
    stock?.map((item: any) => ({
      ...item,
      images: item.images.map(
        (img: any) => `${process.env.STRAPI_HOST_PRODUCTION}${img.url}`
      ),
    })) || [];

  return {
    name,
    id,
    price,
    stock: stockWithImages,
    description,
    productID,
  };
}
