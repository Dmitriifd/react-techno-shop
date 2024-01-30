import { api } from './api-client';

type CreateProduct = {
  brand: string;
  category: string;
  countInStock: number;
  description: string;
  image: string;
  name: string;
  price: number;
};

const createProduct = async (data: CreateProduct) => {
  const response = await api.post('/products', data);
  return response.data;
};

const uploadProductImage = async (data: FormData) => {
  const response = await api.post('/upload', data);
  return response.data;
};

const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const ProductService = {
  createProduct,
  uploadProductImage,
  getProducts,
  deleteProduct,
};
