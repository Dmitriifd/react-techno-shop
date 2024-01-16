import { useScroll } from '@hooks/useScroll';

import { HeaderBottom } from './HeaderBottom';
import { HeaderCenter } from './HeaderCenter';
import { HeaderTop } from './HeaderTop';

const Header = () => {
  const scrollPosition = useScroll();

  return (
    <header className="border-b md:border-none">
      <HeaderTop />
      <div className="relative md:h-[64px]">
        <div
          className={`${
            scrollPosition >= 48
              ? 'fixed top-0 left-0 right-0 shadow-md z-[50]'
              : 'absolute top-0 left-0 right-0 z-[50]'
          }`}>
          <HeaderCenter />
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export { Header };
