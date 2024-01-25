import { Counter } from '@components/shared/Counter';

import { CartModal } from './CartModal';

const CartProduct = () => {
  return (
    <div className="border-b pb-7">
      <div className="flex gap-5">
        <img className="w-[100px] h-[100px]" src="/honor3.webp" alt="img" />
        <div className="flex flex-col justify-between">
          <div className="flex items-start gap-10">
            <h3 className="max-w-[355px]">Смартфон Apple iPhone 13 128 ГБ черный</h3>
            <Counter />
            <div className="flex flex-col">
              <span className="text-[#EC2525] text-xl font-bold">3651 ₽</span>
              <span className="text-[#848992] line-through text-sm">4500 ₽</span>
            </div>
          </div>
          <div>
            <CartModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartProduct };
