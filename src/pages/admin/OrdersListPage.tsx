import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Section } from '@components/ui/section';
import { formatDate } from '@lib/utils';
import { OrderService } from '@services/order.service';
import { Order } from 'types/order';

const OrdersListPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    OrderService.getOrders().then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <Section>
      <h1 className="text-3xl font-bold mb-10">Заказы</h1>

      <Table className="min-w-[740px]">
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="w-[100px] font-bold">ID</TableHead>
            <TableHead className="font-bold">Дата заказа</TableHead>
            <TableHead className="font-bold">Стоимость</TableHead>
            <TableHead className="font-bold">Дата оплаты</TableHead>
            <TableHead className="text-right font-bold">Доставка</TableHead>
            <TableHead className="text-right font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id} className="even:bg-gray-100">
              <TableCell>{order._id}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell>{order.totalPrice} ₽</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell className="text-right">
                {order.isDelivered ? <span>Доставлен</span> : <span>В пути</span>}
              </TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Link
                  to={`/admin/orders/${order._id}`}
                  className="bg-black rounded-md py-1 px-3 text-white hover:bg-black/80">
                  Подробнее
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export { OrdersListPage };
