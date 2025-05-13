// "use client";

// import { use, useState, useEffect } from "react";
// import { GetProductById } from "@/actions/get-unique-product";
// // import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import { NumberFormat } from "@/utils/number-format";
// // import CartButton from "@/components/cart-button";
// // import SwiperImages from "@/components/swiper-images";

// export default function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productID: string }>;
// }) {
//   const { productID } = use(params);

//   const [product, setProduct] = useState<any>(null);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchProduct() {
//       const data = await GetProductById(productID);
//       if (data) {
//         setProduct(data);
//         setSelectedColor(data.stock[0]?.color || null);
//       }
//     }
//     fetchProduct();
//   }, [productID]);

//   if (!product) return <h3>Cargando...</h3>;

//   const filteredImages =
//     product.stock.find((s: any) => s.color === selectedColor)?.images || [];

//   return (
//     <section className="p-4">
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow-xl flex justify-around">
//         <div className="flex flex-col">
//           {/* <SwiperImages images={filteredImages} nameProduct={product.name} /> */}

//           <h3 className="font-semibold text-2xl mt-9 mb-4">Descripción</h3>
//           {/* <BlocksRenderer content={product.description} /> */}
//         </div>

//         <article className="flex flex-col gap-4 border-l pl-4">
//           <h2 className="font-semibold text-2xl">{product.name}</h2>
//           <span className="">{NumberFormat(product.price)}</span>
//           <div className="flex items-center gap-4">
//             {/* <CartButton
//               product={product}
//               selectedColor={selectedColor}
//               setSelectedColor={setSelectedColor}
//             /> */}
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }

export default function ProductDetail() {
  return <h1>hola</h1>;
}
