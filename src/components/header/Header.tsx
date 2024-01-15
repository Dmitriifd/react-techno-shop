import { useCallback, useEffect, useState } from 'react';

import { HeaderBottom } from './HeaderBottom';
import { HeaderCenter } from './HeaderCenter';
import { HeaderTop } from './HeaderTop';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  }, []);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [handleScroll]);

  return (
    <header className="border-b md:border-none">
      <div>
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
      </div>
    </header>
  );
};

export { Header };
