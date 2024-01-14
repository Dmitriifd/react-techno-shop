import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import GeoIcon from '@assets/icons/geo.svg?react';
import { PhoneCallLink } from '@components/PhoneCallLink';
import { Button } from '@components/ui/button';

import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
const HeaderTop = () => {
  return (
    <nav className="flex items-center py-1 md:py-4">
      <div className="block md:hidden">
        <HeaderLogo />
      </div>
      <Button variant="search" className="flex gap-1 sm:ml-auto md:ml-0">
        <GeoIcon />
        <span>Москва</span>
        <ArrowIcon />
      </Button>
      <div className="hidden lg:block pl-[46px]">
        <HeaderNav />
      </div>
      <PhoneCallLink className="hidden md:flex gap-5 ml-auto" />
    </nav>
  );
};

export { HeaderTop };
