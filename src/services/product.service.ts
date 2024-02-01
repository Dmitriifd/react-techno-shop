import { api } from './api-client';

type RequestProduct = {
  id?: string;
  brand: string;
  category: string;
  countInStock: number;
  description: string;
  char: string;
  image: string;
  name: string;
  price: number;
  colors: string[];
};

const createProduct = async (data: RequestProduct) => {
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

const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

const getProductCategories = async (category: string) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

const updateProduct = async (data: RequestProduct) => {
  const response = await api.put(`/products/${data.id}`, data);
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
  getProductById,
  updateProduct,
  getProductCategories,
};
