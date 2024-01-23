import { Link } from 'react-router-dom';

import { Button } from '@components/ui/button';
import { Message } from '@components/ui/message';
import { Section } from '@components/ui/section';
import { Separator } from '@components/ui/separator';

const OrderDetailPage = () => {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-6">Заказ - # id</h1>

      <div className="flex gap-10 items-start">
        <div className="grow">
          <div className="flex flex-col gap-2 mb-5 pb-5">
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Доставка</h2>
            <p className="text-gray-500">
              <strong>Имя:</strong>
              <span></span>
            </p>
            <p className="text-gray-500">
              <strong>Email:</strong>
              <span></span>
            </p>
            <p className="text-gray-500 mb-3">
              <strong>Адрес:</strong>
              <span></span>
            </p>
            <Message variant="danger">Не доставлен</Message>
          </div>

          <Separator className="mb-5" />

          <div className="mb-5 pb-5">
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Способ оплаты</h2>

            <p className="text-gray-500 mb-3">
              <strong>Способ: </strong>
              <span>при получении</span>
            </p>

            <Message variant="success">Оплачено: дата</Message>
          </div>

          <Separator className="mb-5" />

          <div>
            <h2 className="text-2xl font-bold mb-5 text-gray-500">Товары заказа</h2>
            <div>
              <Link to="">
                <div className="flex gap-5">
                  <img width={50} height={50} src="/honor3.webp" alt="" />
                  <p>Honor MagicBook 14</p>
                  <p>1 x 5000 ₽</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="border rounded-md basis-1/3">
          <h2 className="text-2xl font-bold p-5 border-b">Итоги заказа</h2>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Товары</span>
            <span>5000 ₽</span>
          </div>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Доставка</span>
            <span>0 ₽</span>
          </div>
          <div className="p-5 border-b text-gray-500 flex justify-between">
            <span>Итого</span>
            <span>5000 ₽</span>
          </div>
          <div className="p-5">
            <Button>Отметить как доставленный</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { OrderDetailPage };
