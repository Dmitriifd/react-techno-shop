

import { api } from './api-client';

const submitOrder = async (data) => {
  const response = await api.post('/orders/', data);
  return response.data;
};

export const OrderService = {
  submitOrder,
};
