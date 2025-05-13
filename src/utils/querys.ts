export const GetProductByIdQuery =
  "https://upbeat-boat-384ceaadbe.strapiapp.com/api/products?fields[0]=name&fields[1]=price&fields[2]=description&populate[stock][fields][0]=quantity&populate[stock][populate][images][fields][0]=url&populate[stock][populate][size_stock][fields][0]=name&populate[stock][fields][1]=color&filters[productID][$contains]=";

export const GetProductsQuery =
  "https://upbeat-boat-384ceaadbe.strapiapp.com/api/products?fields[0]=name&fields[1]=price&fields[2]=productID&populate[stock][populate][images][fields][0]=url";

export const GetCategoriesQuery =
  "https://upbeat-boat-384ceaadbe.strapiapp.com/api/categories";
