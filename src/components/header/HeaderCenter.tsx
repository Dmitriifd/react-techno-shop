import BasketIcon from '@assets/icons/basket.svg?react';
import BurgerIcon from '@assets/icons/burger.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import { Button } from '@components/ui/button';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

const HeaderCenter = () => {
  const user = false;

  return (
    <div className="hidden md:flex items-center">
      <HeaderLogo />
      <HeaderSearch />
      <div className="flex gap-4">
        <a
          href="/profile"
          className="border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent hover:text-accent-foreground">
          <UserIcon className="fill-[#FE9015]" />
          {user ? <span className="hidden lg:block">Николай</span> : <span className="hidden lg:block">Войти</span>}
        </a>
        <a
          href="/profile"
          className="relative border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent hover:text-accent-foreground">
          <BasketIcon className="fill-[#FE9015]" />
          <span className="absolute flex items-center justify-center text-white text-xs font-medium bg-[#EC2525] rounded-full w-[15px] h-[15px] top-1 left-7 py-[1px] px-[3px]">
            2
          </span>
          <span className="hidden lg:block">7 777 ₽</span>
        </a>
        <Button variant="outline" className="flex py-3 lg:hidden h-[50px]">
          <BurgerIcon fill="#FE9015" />
        </Button>
      </div>
    </div>
  );
};

export { HeaderCenter };
