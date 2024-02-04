import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import BasketIcon from '@assets/icons/basket.svg?react';
import { SERVER_URL } from '@pages/admin/ProductListPage';
import { useCartStore } from '@store/useCartStore';

type CartTooltipProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  countCart: number;
};

export function CartTooltip({ open, setOpen, countCart }: Readonly<CartTooltipProps>) {
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [setOpen]);

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen} delayDuration={200}>
        <TooltipTrigger asChild>
          <Link
            to="/cart"
            className="relative border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent text-accent-base">
            <BasketIcon />
            <span className="absolute flex items-center justify-center text-white text-xs font-medium bg-[#EC2525] rounded-full w-[15px] h-[15px] top-1 left-7 py-[1px] px-[3px]">
              {countCart}
            </span>
            <span className="hidden lg:block text-black">7 777 ₽</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white border p-2" side="bottom" align="end">
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="border-none">
                <Link
                  to={`/product/${item._id}`}
                  target="_blank"
                  className=" py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent text-accent-base grow">
                  <div className="flex items-center gap-5 justify-between text-black basis-full">
                    <img src={`${SERVER_URL}${item.image}`} alt="" width={50} height={50} />
                    <span>{item.name}</span>
                    <span className="ml-auto text-red-500 font-bold">{item.price} ₽</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
