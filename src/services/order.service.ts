import { CartProduct } from '@store/useCartStore';

import { api } from './api-client';

type OrderData = {
  orderItems: CartProduct[];
  shippingAddress: {
    address: string;
    city: string;
  };
};

const submitOrder = async (data: OrderData) => {
  const response = await api.post('/orders', data);
  return response.data;
};

const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};
const getMyOrders = async () => {
  const response = await api.get('/orders/mine');
  return response.data;
};

const getOrderById = async (id: string) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

const updateOrderToDelivered = async (id: string) => {
  const response = await api.put(`/orders/${id}/deliver`);
  return response.data;
};

export const OrderService = {
  submitOrder,
  getOrders,
  getOrderById,
  updateOrderToDelivered,
  getMyOrders,
};
