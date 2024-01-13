import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import GeoIcon from '@assets/icons/geo.svg?react';
import PhoneIcon from '@assets/icons/phone.svg?react';
import { Button } from '@components/ui/button';
import { topNavLink } from '@mock/data';

import { HeaderLogo } from './HeaderLogo';
const HeaderTop = () => {
  return (
    <nav className="flex items-center py-4">
      <div className="block md:hidden">
        <HeaderLogo />
      </div>
      <Button variant="search" className="flex gap-1 sm:ml-auto md:ml-0">
        <GeoIcon />
        <span>Москва</span>
        <ArrowIcon />
      </Button>
      <ul className="hidden lg:flex gap-6 text-xs pl-[46px]">
        {topNavLink.map(({ id, title, ulr }) => (
          <li key={id}>
            <a href={ulr} className="transition-colors hover:text-accent-base">
              {title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex gap-5 ml-auto">
        <li>
          <a className="group transition-transform flex items-center gap-2 text-sm" href="tel:+73534553322">
            <PhoneIcon className="group-hover:scale-[1.1] duration-300" />
            +7 (3534) 55-33-22
          </a>
        </li>
        <li>
          <a className="text-sm text-accent-base" href="tel:+73534553322">
            Заказать звонок
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { HeaderTop };
