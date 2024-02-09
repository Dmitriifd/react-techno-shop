import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import AddCartIcon from '@assets/icons/addCart.svg?react';
import ArrowLeftIcon from '@assets/icons/arrowLeft.svg?react';
import ReloadIcon from '@assets/icons/reload.svg?react';
import { Button } from '@components/ui/button';
import { formatDate } from '@lib/utils';
import { SERVER_URL } from '@pages/admin/ProductListPage';
import { useCartStore } from '@store/useCartStore';
import { useOrderStore } from '@store/useOrderStore';
import { useProductStore } from '@store/useProductStore';

const OrderDetailsPage = () => {
  const { id } = useParams() as { id: string };
  const fetchOrderById = useOrderStore((state) => state.fetchOrderById);
  const order = useOrderStore((state) => state.order);
  const fetchProductById = useProductStore((state) => state.fetchProductById);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (id: string) => {
    fetchProductById(id).then((data) => {
      addToCart(data);
    });
  };

  useEffect(() => {
    fetchOrderById(id);
  }, [id, fetchOrderById]);

  return (
    <div className="grow">
      <Link to=".." className="flex items-center gap-2 py-1 mb-[30px]">
        <ArrowLeftIcon fill="#333333" />
        История заказов
      </Link>

      <div>
        <div className="flex justify-between mb-10 flex-col gap-5 sm2:flex-row sm2:gap-2">
          <div className="flex gap-5 items-center">
            <h3 className="text-xl font-bold tablet:text-2xl ">Заказ от {formatDate(order?.createdAt)}</h3>
            <span className="text-sm text-[#848992]">№ 662</span>
          </div>

          <Button variant="base" className="flex items-center gap-2">
            <ReloadIcon fill="white" />
            Повторить заказ
          </Button>
        </div>

        <h4 className="text-xl font-bold mb-[30px]">Товары</h4>

        <ul className="space-y-7">
          {order?.orderItems?.map((item) => (
            <li className="pb-[30px] border-b last:border-b-0" key={item?._id}>
              <div className="flex">
                <div className="mr-5">
                  <Link to={`/product/${item.product}`}>
                    <img className="w-[100px] h-[100px] object-contain" src={`${SERVER_URL}${item.image}`} alt="poco" />
                  </Link>
                </div>
                <div className="flex justify-between flex-col gap-1 grow lg:flex-row">
                  <Link to={`/product/${item.product}`}>
                    <h2 className="max-w-[350px]">{item.name}</h2>
                  </Link>
                  <div className="flex gap-10">
                    <span className="text-sm">{item.quantity} шт</span>
                    <div className="flex gap-2 items-center lg:block">
                      <p className="text-xl font-bold text-[#EC2525]">{item.price} ₽</p>
                      <span className="text-sm text-[#848992] line-through">2 000 ₽</span>
                    </div>
                  </div>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="base" className="sm2:w-fit" onClick={() => handleAddToCart(item.product)}>
                          <AddCartIcon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black shadow mb-1 z-50">
                        <p>Добавить в корзину</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-5 border p-6 rounded-[5px] mb-12">
          <div className="flex justify-between">
            <span className="text-sm">{order.orderItems?.length} товара</span>
            <span className="text-sm font-bold">{order.totalPrice} ₽</span>
          </div>
          <div className="flex justify-between pb-5 border-b">
            <span className="text-sm">Доставка</span>
            <span className="text-sm font-bold">0 ₽</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Итого</span>
            <span className="text-xl font-bold">{order.totalPrice} ₽</span>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold">Способ оплаты:</h3>
            <p>Оплата при получении наличными или картой</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Способ доставки:</h3>
            <p>Доставка курьером по г. Москва</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Адрес доставки:</h3>
            <p>{order.shippingAddress?.city}</p>
            <p>{order.shippingAddress?.address}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Комментарий:</h3>
            <p>Без комментариев</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrderDetailsPage };
