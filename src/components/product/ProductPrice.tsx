import CheckIcon from '@assets/icons/check.svg?react';
import VanIcon from '@assets/icons/van.svg?react';
import WatchIcon from '@assets/icons/watch.svg?react';
import { BuyOneClickModal } from '@components/modals/BuyOneClickModal';
import { Button } from '@components/ui/button';

const ProductPrice = () => {
  return (
    <div className="ml-auto">
      <div className="border rounded-[5px] p-6 min-w-[270px] mb-6">
        <div className="mb-5">
          <span className="text-[#EC2525] text-2xl font-bold pr-[10px]">15 990 ₽</span>
          <span className="text-[#848992] line-through">16 990 ₽</span>
        </div>
        <div className="space-y-5">
          <Button variant="base" className="w-full">
            Купить
          </Button>
          <BuyOneClickModal />
        </div>
      </div>
      <ul className="space-y-3">
        <li className="text-sm flex gap-[10px] items-center text-[#219653]">
          <CheckIcon width={20} height={20} stroke="#219653" />
          Есть на складе
        </li>
        <li className="text-sm flex gap-[10px] items-center text-[#219653]">
          <WatchIcon width={20} height={20} />
          Доставим сегодня
        </li>
        <li className="text-sm flex gap-[10px] items-center max-w-[235px]">
          <VanIcon width={20} height={20} />
          Бесплатная доставка при заказе от 5000р.
        </li>
      </ul>
    </div>
  );
};

export { ProductPrice };
