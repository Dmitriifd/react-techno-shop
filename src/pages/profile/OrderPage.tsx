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
          <Link to="." className="flex justify-between">
            <div className="flex gap-5 items-center">
              <h3 className="text-xl font-bold">Заказ от 11/06/2023</h3>
              <span className="text-sm text-[#848992]">№ 662</span>
            </div>
            <div className="flex items-center gap-[30px]">
              <span className="text-[#219653] font-bold">В обработке</span>
              <span className="text-sm">3 товара</span>
              <span className="text-xl font-bold">5655 ₽</span>
            </div>
          </Link>
          <Button variant="link" className="pl-0 text-[#EC2525] flex gap-2 hover:no-underline">
            <CloseIcon fill="#EC2525" />
            Отменить заказ
          </Button>
        </li>
        <li className="pb-3 border-b">
          <Link to="." className="flex justify-between">
            <div className="flex gap-5 items-center">
              <h3 className="text-xl font-bold">Заказ от 11/06/2023</h3>
              <span className="text-sm text-[#848992]">№ 662</span>
            </div>
            <div className="flex items-center gap-[30px]">
              <span className="text-[#219653] text-sm font-medium">Доставлен</span>
              <span className="text-sm">3 товара</span>
              <span className="text-xl font-bold">5655 ₽</span>
            </div>
          </Link>
          <Button variant="link" className="pl-0 text-accent-base flex gap-2 hover:no-underline">
            <ReloadIcon />
            Повторить заказ
          </Button>
        </li>
        <li className="pb-3 border-b">
          <Link to="." className="flex justify-between">
            <div className="flex gap-5 items-center">
              <h3 className="text-xl font-bold">Заказ от 11/06/2023</h3>
              <span className="text-sm text-[#848992]">№ 662</span>
            </div>
            <div className="flex items-center gap-[30px]">
              <span className="text-sm text-[#EC2525] font-medium">Отменен</span>
              <span className="text-sm">3 товара</span>
              <span className="text-xl font-bold">5655 ₽</span>
            </div>
          </Link>
          <Button variant="link" className="pl-0 text-accent-base flex gap-2 hover:no-underline">
            <ReloadIcon />
            Повторить заказ
          </Button>
        </li>
      </ul>
    </div>
  );
};

export { OrderPage };
