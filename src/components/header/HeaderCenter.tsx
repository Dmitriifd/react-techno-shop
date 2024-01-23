import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BasketIcon from '@assets/icons/basket.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import { MobileMenu } from '@components/mobile/MobileMenu';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

const HeaderCenter = () => {
  const user = true;

  return (
    <div className="container hidden md:flex items-center bg-white py-1">
      <HeaderLogo />
      <HeaderSearch />
      <div className="flex gap-4">
        {user ? (
          <Link
            to="/profile"
            className="border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent hover:text-accent-foreground">
            <UserIcon className="fill-[#FE9015]" />
            <span className="hidden lg:block">Николай</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent hover:text-accent-foreground">
            <UserIcon className="fill-[#FE9015]" />
            <span className="hidden lg:block">Войти</span>
          </Link>
        )}
        <Link
          to="/cart"
          className="relative border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent hover:text-accent-foreground">
          <BasketIcon className="fill-[#FE9015]" />
          <span className="absolute flex items-center justify-center text-white text-xs font-medium bg-[#EC2525] rounded-full w-[15px] h-[15px] top-1 left-7 py-[1px] px-[3px]">
            2
          </span>
          <span className="hidden lg:block">7 777 ₽</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="border p-2 px-2 rounded-md text-sm">Admin</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link to="/admin/products" className="cursor-pointer">
                Товары
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/orders" className="cursor-pointer">
                Заказы
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/users" className="cursor-pointer">
                Пользователи
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MobileMenu isHeader />
      </div>
    </div>
  );
};

export { HeaderCenter };
