import { GetProducts } from "@/actions/get-products";
import Title from "@/ui/title";
import { NumberFormat } from "@/utils/number-format";
import Link from "next/link";

export default async function Products() {
  const { products } = await GetProducts();

  if (!products) return null;

  return (
    <div className="flex flex-col w-full max-w-screen-xl gap-4">
      <Title>Productos</Title>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product: any) => (
          <Link
            href={`/${product.productID}`}
            key={product.id}
            className="bg-white rounded shadow-xl cursor-pointer group relative p-2"
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
  );
}
