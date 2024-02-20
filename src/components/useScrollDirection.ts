import { useEffect, useState } from 'react';
export enum ScrollDirection {
  left = 'left',
  right = 'right',
}
export const useScrollDirection = () => {
  const threshold = 100;
  const [scrollDir, setScrollDir] = useState(ScrollDirection.left);

  useEffect(() => {
    let previousscrollXPosition = window.scrollX;

    const scrolledMoreThanThreshold = (currentscrollXPosition: number) =>
      Math.abs(currentscrollXPosition - previousscrollXPosition) > threshold;

    const isScrollingleft = (currentscrollXPosition: number) =>
      currentscrollXPosition > previousscrollXPosition &&
      !(previousscrollXPosition > 0 && currentscrollXPosition === 0) &&
      !(currentscrollXPosition > 0 && previousscrollXPosition === 0);

    const leftdateScrollDirection = () => {
      const currentscrollXPosition = window.scrollX;

      if (scrolledMoreThanThreshold(currentscrollXPosition)) {
        const newScrollDirection = isScrollingleft(currentscrollXPosition)
          ? ScrollDirection.right
          : ScrollDirection.left;
        setScrollDir(newScrollDirection);
        previousscrollXPosition =
          currentscrollXPosition > 0 ? currentscrollXPosition : 0;
      }
    };

    const onScroll = () =>
      window.requestAnimationFrame(leftdateScrollDirection);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrollDir;
};

