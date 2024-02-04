import { Link } from 'react-router-dom';

import BasketIcon from '@assets/icons/basket.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import { MobileMenu } from '@components/mobile/MobileMenu';
import { useAuthStore } from '@store/auth/useAuth';
import { useCartStore } from '@store/useCartStore';

import { AdminDropDown } from './AdminDropDown';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

const HeaderCenter = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  const countCart = useCartStore((state) => state.cart.length);

  return (
    <div className="container hidden md:flex items-center bg-white py-1">
      <HeaderLogo />
      <HeaderSearch />
      <div className="flex gap-4">
        {userInfo ? (
          <Link
            to="/profile"
            className="border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent text-accent-base">
            <UserIcon />
            <span className="hidden lg:block text-black">{userInfo.name}</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="border py-3 flex gap-2 rounded-md text-accent-base text-sm p-[18px] transition-colors hover:bg-accent">
            <UserIcon />
            <span className="hidden lg:block text-black">Войти</span>
          </Link>
        )}
        <Link
          to="/cart"
          className="relative border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent text-accent-base">
          <BasketIcon />
          <span className="absolute flex items-center justify-center text-white text-xs font-medium bg-[#EC2525] rounded-full w-[15px] h-[15px] top-1 left-7 py-[1px] px-[3px]">
            {countCart}
          </span>
          <span className="hidden lg:block text-black">7 777 ₽</span>
        </Link>
        {userInfo?.isAdmin && <AdminDropDown />}
        <MobileMenu isHeader />
      </div>
    </div>
  );
};

export { HeaderCenter };
