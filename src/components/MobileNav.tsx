import { Link } from 'react-router-dom';

import SearchIcon from '@assets/icons/search.svg?react';
import { mobileNavLink } from '@mock/data';

import { MobileMenu } from './MobileMenu';

const MobileNav = () => {
  return (
    <nav className="flex fixed bottom-0 left-0 right-0 z-50 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.14)] md:hidden h-[60px] px-4 bg-white">
      <ul className="flex flex-1 items-center justify-between">
        {mobileNavLink.map(({ id, title, url, icon, isMenu }) => (
          <li key={id}>
            {isMenu ? (
              <MobileMenu isHeader={false} title={title} />
            ) : (
              <Link
                to={url}
                className="p-2 flex flex-col gap-1 items-center justify-center text-[#B5BBC4] text-xs w-[60px] h-[60px]">
                {icon}
                <span>{title}</span>
              </Link>
            )}
          </li>
        ))}
        <button className="p-2 flex flex-col gap-1 items-center justify-center text-[#B5BBC4] text-xs w-[60px] h-[60px]">
          <SearchIcon fill="#B5BBC4" />
          <span>Поиск</span>
        </button>
      </ul>
    </nav>
  );
};

export { MobileNav };
