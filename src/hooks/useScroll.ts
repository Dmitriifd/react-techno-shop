import { useCallback, useEffect, useState } from 'react';

export const useScroll = () => {
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

  return scrollPosition;
};
