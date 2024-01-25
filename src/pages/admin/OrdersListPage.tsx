import { Link } from 'react-router-dom';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Section } from '@components/ui/section';

const orders = [
  {
    id: '1',
    date: '2023-11-28',
    total: '64500',
    paid: '2023-11-28',
    delivered: '2024-01-22',
  },
  {
    id: '2',
    date: '2023-11-29',
    total: '64500',
    paid: '2023-11-30',
    delivered: '2024-01-22',
  },
];

const OrdersListPage = () => {
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
            <TableRow key={order.id} className="even:bg-gray-100">
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.paid}</TableCell>
              <TableCell className="text-right">{order.delivered}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Link to="/admin/orders/1" className="bg-black rounded-md py-1 px-3 text-white hover:bg-black/80">
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
