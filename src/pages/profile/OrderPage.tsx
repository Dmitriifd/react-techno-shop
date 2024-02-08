import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ReloadIcon from '@assets/icons/reload.svg?react';
import { Button } from '@components/ui/button';
import { formatDate } from '@lib/utils';
import { useOrderStore } from '@store/useOrderStore';

const OrderPage = () => {
  const { fetchOrders, orders, loading } = useOrderStore((state) => state);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="grow">
      <h2 className="text-2xl font-bold mb-10">Заказы</h2>

      <ul className="space-y-7">
        {loading && <li>Загрузка...</li>}
        {orders.map((order) => (
          <li className="pb-3 border-b" key={order._id}>
            <Link to={`${order._id}`} className="flex justify-between gap-10 items-start">
              <div className="flex gap-5 flex-col items-start">
                <div className="flex gap-3">
                  <h3 className="text-base font-bold lg:text-xl">
                    <span className="hidden sm2:inline-block">Заказ от</span> {formatDate(order.createdAt)}
                  </h3>
                </div>
                <Button variant="link" className="pl-0 text-accent-base flex gap-2 hover:no-underline">
                  <ReloadIcon fill="#FE9015" />
                  Повторить заказ
                </Button>
              </div>
              <div className="flex items-end gap-1 flex-wrap flex-col-reverse tablet:flex-row tablet:gap-[30px] tablet:items-center">
                {order.isDelivered ? (
                  <span className="text-[#219653] text-sm font-medium">Доставлен</span>
                ) : (
                  <span className="text-[#219653] font-bold">В обработке</span>
                )}

                <span className="text-sm">{order.orderItems.length} товара</span>
                <span className="text-base font-bold lg:text-xl">{order.totalPrice} ₽</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { OrderPage };
