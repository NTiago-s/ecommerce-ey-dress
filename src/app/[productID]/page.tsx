"use client";

import { use, useState, useEffect } from "react";
import { GetProductById } from "@/actions/get-unique-product";
import { NumberFormat } from "@/utils/number-format";
import CartButton from "@/ui/cart-button copy";
import ImageGallery from "@/ui/image-gallery";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = use(params);

  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await GetProductById(productID);
      if (data) {
        setProduct(data);
        setSelectedColor(data.stock[0]?.color || null);
      }
    }
    fetchProduct();
  }, [productID]);

  if (!product) return <h3>Cargando...</h3>;

  const filteredImages =
    product.stock.find((s: any) => s.color === selectedColor)?.images || [];

  return (
    <section className="m-10">
      <div className="flex max-w-7xl mx-auto bg-white rounded shadow-xl justify-around p-10">
        <div>
          <ImageGallery images={filteredImages} />
        </div>

        <div className="flex flex-col gap-4 border-l pl-4">
          <h2 className="font-semibold text-3xl">{product.name}</h2>
          <span className="text-lg">{NumberFormat(product.price)}</span>
          <div className="flex items-center gap-4">
            <CartButton
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
