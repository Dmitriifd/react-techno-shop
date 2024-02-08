import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@components/ui/button';
import { Message } from '@components/ui/message';
import { Section } from '@components/ui/section';
import { Separator } from '@components/ui/separator';
import { OrderService } from '@services/order.service';
import { Order } from 'types/order';

import { SERVER_URL } from './ProductListPage';

const OrderDetailPage = () => {
  const [order, setOrder] = useState<Order>({} as Order);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    OrderService.getOrderById(id).then((data) => {
      setOrder(data);
    });
  }, [id]);

  const handleChangeDelivery = () => {
    OrderService.updateOrderToDelivered(id).then((data) => {
      setOrder(data);
    });
  };

  return (
    <Section>
      <h1 className="text-3xl font-bold mb-6">Заказ - # {order?._id}</h1>

      <div className="flex gap-10 flex-col md:items-start md:flex-row">
        <div className="grow">
          <div className="flex flex-col gap-2 mb-5 pb-5">
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Доставка</h2>
            <p className="text-gray-500">
              <strong>Имя: {order.user?.name}</strong>
              <span></span>
            </p>
            <p className="text-gray-500">
              <strong>Email: {order.user?.email}</strong>
              <span></span>
            </p>
            <p className="text-gray-500 mb-3">
              <strong>Адрес: {order.shippingAddress?.address}</strong>
              <span></span>
            </p>
            {order?.isDelivered ? (
              <Message variant="success">Доставлен</Message>
            ) : (
              <Message variant="danger">Не доставлен</Message>
            )}
          </div>

          <Separator className="mb-5" />

          <div className="mb-5 pb-5">
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Способ оплаты</h2>

            <p className="text-gray-500 mb-3">
              <strong>Способ: </strong>
              <span>при получении</span>
            </p>

            <Message variant="success">Оплачен</Message>
          </div>

          <Separator className="mb-5" />

          <div>
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Товары заказа</h2>
            <ul className="flex flex-col gap-5">
              {order.orderItems?.map((item) => (
                <li key={item?._id}>
                  <Link to={`/product/${item?.product}`}>
                    <div className="flex gap-5 flex-wrap">
                      <img width={50} height={50} src={`${SERVER_URL}${item?.image}`} alt={item?.name} />
                      <p>{item?.name}</p>
                      <p>
                        {item?.quantity} x {item?.price}₽
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border rounded-md basis-1/3">
          <h2 className="text-2xl font-bold p-5 border-b">Итоги заказа</h2>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Товары</span>
            <span>{order?.totalPrice} ₽</span>
          </div>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Доставка</span>
            <span>0 ₽</span>
          </div>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Итого</span>
            <span>{order?.totalPrice} ₽</span>
          </div>
          <div className="p-5 space-y-3">
            <Button variant="base" disabled={order.isDelivered} onClick={handleChangeDelivery}>
              Отметить как доставленный
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { OrderDetailPage };
