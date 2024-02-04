import { Link } from 'react-router-dom';

import CheckIcon from '@assets/icons/check.svg?react';
import VanIcon from '@assets/icons/van.svg?react';
import WatchIcon from '@assets/icons/watch.svg?react';
import { BuyOneClickModal } from '@components/modals/BuyOneClickModal';
import { Button } from '@components/ui/button';
import { useCartStore } from '@store/useCartStore';
import { Product } from 'types/product';

type ProductPriceProps = {
  price: number;
  product: Product;
};

const ProductPrice = ({ price, product }: ProductPriceProps) => {
  const { cart, addToCart } = useCartStore((state) => state);
  const inCart = cart.some((item) => item._id === product._id);

  return (
    <div className="ml-0 lg:ml-auto w-full lg:w-fit">
      <div className="border rounded-[5px] p-6 min-w-[270px] mb-6 flex flex-col items-center gap-5 lg:block md:flex-row">
        <div className="mb-5 basis-1/2">
          <span className="text-[#EC2525] text-2xl font-bold pr-[10px]">{price} ₽</span>
          <span className="text-[#848992] line-through">16 990 ₽</span>
        </div>
        <div className="space-y-0 flex flex-col items-center gap-5 basis-1/2 lg:block lg:space-y-5 w-full md:w-fit sm2:flex-row">
          {inCart ? (
            <Button asChild variant="outline2" className="w-full">
              <Link to="/cart" className="w-full">
                В корзине
              </Link>
            </Button>
          ) : (
            <Button variant="base" className="w-full" onClick={() => addToCart(product)}>
              Купить
            </Button>
          )}
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
