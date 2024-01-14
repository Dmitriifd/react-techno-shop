import { useEffect, useState } from 'react';

import { HeaderBottom } from './HeaderBottom';
import { HeaderCenter } from './HeaderCenter';
import { HeaderTop } from './HeaderTop';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="border-b md:border-none">
      <div>
        <HeaderTop />
        <div className="relative md:h-[64px]">
          <div
            className={`${
              scrollPosition >= 48
                ? 'fixed top-0 left-0 right-0 shadow-md z-[99]'
                : 'absolute top-0 left-0 right-0 z-[99]'
            }`}>
            <HeaderCenter />
          </div>
        </div>
        <HeaderBottom />
      </div>
    </header>
  );
};

export { Header };
