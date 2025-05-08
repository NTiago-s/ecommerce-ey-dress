export const GetProductByIdQuery =
  "http://localhost:1337/api/products?fields[0]=name&fields[1]=price&fields[2]=description&populate[stock][fields][0]=quantity&populate[stock][populate][images][fields][0]=url&populate[stock][populate][size_stock][fields][0]=name&populate[stock][fields][1]=color&filters[productID][$contains]=";

export const GetProductsQuery =
  "http://localhost:1337/api/products?fields[0]=name&fields[1]=price&fields[2]=productID&populate[stock][populate][images][fields][0]=url";

export const GetCategoriesQuery = "http://localhost:1337/api/categories";
