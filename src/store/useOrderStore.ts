import { OrderService } from '@services/order.service';
import { Order } from 'types/order';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type OrderStore = {
  orders: Order[];
  order: Order;
  loading: boolean;
  fetchOrders: () => Promise<void>;
  fetchOrderById: (id: string) => Promise<void>;
};

export const useOrderStore = create<OrderStore>()(
  devtools(
    (set) => ({
      orders: [],
      order: {} as Order,
      loading: false,
      fetchOrders: async () => {
        set({ loading: true });
        const res = await OrderService.getMyOrders();
        set({ orders: res, loading: false }, false, 'fetchOrders');
      },
      fetchOrderById: async (id) => {
        set({ loading: true, order: {} as Order });
        const res = await OrderService.getOrderById(id);
        set({ order: res, loading: false }, false, 'fetchOrderById');
      },
    }),
    { name: 'orders' },
  ),
);
