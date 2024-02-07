import { useCallback, useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(scrollPosition);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    scrollPositionRef.current = currentPosition;
    setScrollPosition(currentPosition);
  }, []);

  const checkWindowSize = useCallback(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [checkWindowSize, handleScroll]);

  return scrollPosition;
};
