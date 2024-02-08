export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  countInStock: number;
  description: string;
  char: string;
  colors: string[];
  quantity?: number;
};
