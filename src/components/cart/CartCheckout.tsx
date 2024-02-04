import { Link } from 'react-router-dom';

import { useCartStore } from '@store/useCartStore';

const CartCheckout = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const quantity = useCartStore((state) => state.cart.length);

  return (
    <div className="ml-auto border p-6 flex flex-col space-y-5 rounded-[5px] xll:max-w-[370px] w-full">
      <Link
        to="/checkout"
        className="bg-accent-base rounded-md p-2 text-center transition-colors text-white hover:bg-accent-base/90">
        Оформить заказ
      </Link>
      <div className="flex gap-x-5">
        <span className="text-sm">{quantity} товара</span>
        <span className="ml-auto font-bold">{totalPrice} ₽</span>
      </div>
      <div className="flex gap-x-5 border-b pb-5">
        <span className="text-sm">Доставка</span>
        <span className="ml-auto font-bold">0 ₽</span>
      </div>
      <div className="flex gap-x-5">
        <span className="text-sm">Итого</span>
        <span className="ml-auto font-bold">{totalPrice} ₽</span>
      </div>
    </div>
  );
};

export { CartCheckout };
