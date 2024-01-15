import { CityModal } from '@components/modals/CityModal';
import { PhoneCallLink } from '@components/PhoneCallLink';

import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';

const HeaderTop = () => {
  return (
    <nav className="container flex items-center justify-between py-1 md:py-4">
      <div className="block md:hidden">
        <HeaderLogo />
      </div>
      <CityModal />
      <div className="hidden lg:block pl-[46px]">
        <HeaderNav />
      </div>
      <PhoneCallLink className="hidden md:flex gap-5 ml-auto" />
    </nav>
  );
};

export { HeaderTop };
