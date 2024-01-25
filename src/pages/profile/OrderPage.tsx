import { Link } from 'react-router-dom';

import CloseIcon from '@assets/icons/close.svg?react';
import ReloadIcon from '@assets/icons/reload.svg?react';
import { Button } from '@components/ui/button';

const OrderPage = () => {
  return (
    <div className="grow">
      <h2 className="text-2xl font-bold mb-10">Заказы</h2>

      <ul className="space-y-7">
        <li className="pb-3 border-b">
          <Link to="5" className="flex justify-between gap-10 items-start">
            <div className="flex gap-5 flex-col items-start">
              <div className="flex gap-3">
                <h3 className="text-base font-bold lg:text-xl">
                  <span className="hidden sm2:inline-block">Заказ от</span> 11/06/2023
                </h3>
                <span className="text-sm text-[#848992]">№ 662</span>
              </div>
              <Button variant="link" className="pl-0 text-[#EC2525] flex gap-2 hover:no-underline">
                <CloseIcon fill="#EC2525" />
                Отменить заказ
              </Button>
            </div>
            <div className="flex items-end gap-1 flex-wrap flex-col-reverse tablet:flex-row tablet:gap-[30px] tablet:items-center">
              <span className="text-[#219653] font-bold">В обработке</span>
              <span className="text-sm">3 товара</span>
              <span className="text-base font-bold lg:text-xl">5655 ₽</span>
            </div>
          </Link>
        </li>
        <li className="pb-3 border-b">
          <Link to="6" className="flex justify-between gap-10 items-start">
            <div className="flex gap-5 flex-col items-start">
              <div className="flex gap-3">
                <h3 className="text-base font-bold lg:text-xl">
                  <span className="hidden sm2:inline-block">Заказ от</span> 11/06/2023
                </h3>
                <span className="text-sm text-[#848992]">№ 662</span>
              </div>
              <Button variant="link" className="pl-0 text-accent-base flex gap-2 hover:no-underline">
                <ReloadIcon fill="#FE9015" />
                Повторить заказ
              </Button>
            </div>
            <div className="flex items-end gap-1 flex-wrap flex-col-reverse tablet:flex-row tablet:gap-[30px] tablet:items-center">
              <span className="text-[#219653] text-sm font-medium">Доставлен</span>
              <span className="text-sm">3 товара</span>
              <span className="text-base font-bold lg:text-xl">5655 ₽</span>
            </div>
          </Link>
        </li>
        <li className="pb-3 border-b">
          <Link to="7" className="flex justify-between gap-10 items-start">
            <div className="flex gap-5 flex-col items-start">
              <div className="flex gap-3">
                <h3 className="text-base font-bold lg:text-xl">
                  <span className="hidden sm2:inline-block">Заказ от</span> 11/06/2023
                </h3>
                <span className="text-sm text-[#848992]">№ 662</span>
              </div>
              <Button variant="link" className="pl-0 text-accent-base flex gap-2 hover:no-underline">
                <ReloadIcon fill="#FE9015" />
                Повторить заказ
              </Button>
            </div>
            <div className="flex items-end gap-1 flex-wrap flex-col-reverse tablet:flex-row tablet:gap-[30px] tablet:items-center">
              <span className="text-sm text-[#EC2525] font-medium">Отменен</span>
              <span className="text-sm">3 товара</span>
              <span className="text-base font-bold lg:text-xl">5655 ₽</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { OrderPage };
