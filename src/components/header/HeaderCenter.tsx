import { Link } from 'react-router-dom';

import UserIcon from '@assets/icons/user.svg?react';
import { CartTooltip } from '@components/cart/CartTooltip';
import { MobileMenu } from '@components/mobile/MobileMenu';
import { useAuthStore } from '@store/auth/useAuth';
import { useCartStore } from '@store/useCartStore';

import { AdminDropDown } from './AdminDropDown';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

const HeaderCenter = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  const countCart = useCartStore((state) => state.cart.length);
  const { open, setOpen, totalPrice } = useCartStore((state) => state);

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
        <CartTooltip open={open} setOpen={setOpen} countCart={countCart} totalPrice={totalPrice} />
        {userInfo?.isAdmin && <AdminDropDown />}
        <MobileMenu isHeader />
      </div>
    </div>
  );
};

export { HeaderCenter };
