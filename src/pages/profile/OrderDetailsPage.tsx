import { Link } from 'react-router-dom';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import AddCartIcon from '@assets/icons/addCart.svg?react';
import ArrowLeftIcon from '@assets/icons/arrowLeft.svg?react';
import ReloadIcon from '@assets/icons/reload.svg?react';
import { Button } from '@components/ui/button';

const OrderDetailsPage = () => {
  return (
    <div className="grow">
      <Link to=".." className="flex items-center gap-2 py-1 mb-[30px]">
        <ArrowLeftIcon fill="#333333" />
        История заказов
      </Link>

      <div>
        <div className="flex justify-between mb-10">
          <div className="flex gap-5 items-center">
            <h3 className="text-2xl font-bold">Заказ от 11/06/2023</h3>
            <span className="text-sm text-[#848992]">№ 662</span>
          </div>

          <Button variant="base" className="flex items-center gap-2">
            <ReloadIcon fill="white" />
            Повторить заказ
          </Button>
        </div>

        <h4 className="text-xl font-bold mb-[30px]">Товары</h4>

        <ul className="space-y-7">
          <li className="pb-[30px] border-b last:border-b-0">
            <div className="flex">
              <div className="mr-5">
                <img className="w-[100px] h-[100px] " src="/poco7.webp" alt="poco" />
              </div>
              <div className="flex justify-between grow">
                <div>
                  <h2 className="max-w-[350px]">Смартфон Apple iPhone 13 128 ГБ черный</h2>
                </div>
                <div className="flex gap-10">
                  <span className="text-sm">1шт</span>
                  <div className="">
                    <p className="text-xl font-bold text-[#EC2525]">1 000 ₽</p>
                    <span className="text-sm text-[#848992] line-through">2 000 ₽</span>
                  </div>
                </div>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="base" className="">
                        <AddCartIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black shadow mb-1">
                      <p>Добавить в корзину</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </li>
          <li className="pb-[30px] border-b last:border-b-0">
            <div className="flex">
              <div className="mr-5">
                <img className="w-[100px] h-[100px] " src="/poco7.webp" alt="poco" />
              </div>
              <div className="flex justify-between grow">
                <div>
                  <h2 className="max-w-[350px]">Смартфон Apple iPhone 13 128 ГБ черный</h2>
                </div>
                <div className="flex gap-10">
                  <span className="text-sm">1шт</span>
                  <div className="">
                    <p className="text-xl font-bold text-[#EC2525]">1 000 ₽</p>
                    <span className="text-sm text-[#848992] line-through">2 000 ₽</span>
                  </div>
                </div>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="base" className="">
                        <AddCartIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black shadow mb-1">
                      <p>Добавить в корзину</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </li>
        </ul>

        <div className="space-y-5 border p-6 rounded-[5px] mb-12">
          <div className="flex justify-between">
            <span className="text-sm">3 товара</span>
            <span className="text-sm font-bold">5655 ₽</span>
          </div>
          <div className="flex justify-between pb-5 border-b">
            <span className="text-sm">Доставка</span>
            <span className="text-sm font-bold">0 ₽</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Итого</span>
            <span className="text-xl font-bold">5655 ₽</span>
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
            <p>Москва</p>
            <p>Московская область</p>
            <p>ул. Вымышленная, д. 55, кв 123</p>
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
