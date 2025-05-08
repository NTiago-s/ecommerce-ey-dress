import { GetProducts } from "@/actions/get-products";
import { NumberFormat } from "@/utils/number-format";
import Link from "next/link";

export default async function Cards() {
  const { products } = await GetProducts();

  if (!products) return null;

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">Productos</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <Link
              href={`/${product.productID}`}
              key={product.id}
              className="bg-white rounded shadow-xl cursor-pointer group relative p-4"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:saturate-150 transition duration-300 group-hover:scale-125 lg:aspect-auto lg:h-80"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {NumberFormat(product.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
