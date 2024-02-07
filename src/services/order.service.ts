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

export const OrderService = {
  submitOrder,
  getOrders,
};
