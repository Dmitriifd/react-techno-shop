import BasketIcon from '@assets/icons/basket.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

const HeaderCenter = () => {
  const user = false;

  return (
    <div className="flex items-center">
      <HeaderLogo />
      <HeaderSearch />
      <div className="flex gap-4">
        <a
          href="/profile"
          className="group border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent-base">
          <UserIcon className="group-hover:fill-white fill-[#FE9015]" />
          {user ? (
            <span className="group-hover:text-white">Николай</span>
          ) : (
            <span className="group-hover:text-white">Войти</span>
          )}
        </a>
        <a
          href="/profile"
          className="relative group border py-3 flex gap-2 rounded-md text-sm p-[18px] transition-colors hover:bg-accent-base">
          <BasketIcon className="group-hover:fill-white fill-[#FE9015]" />
          <span className="absolute flex items-center justify-center text-white text-xs font-medium bg-[#EC2525] rounded-full w-[15px] h-[15px] top-1 left-7 py-[1px] px-[3px]">
            2
          </span>
          <span className="group-hover:text-white">7 777 ₽</span>
        </a>
      </div>
    </div>
  );
};

export { HeaderCenter };
