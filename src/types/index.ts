export interface NavOption {
  title: string;
  href: string;
  icon: React.ElementType;
}

export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  badges: string[];
};

export type ProductsType = {
  name: any;
  id: any;
  image: string | null;
  price: any;
  colors: any;
  stock: any;
  description: any;
  productID: string;
};
