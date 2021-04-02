import { useEffect, useLayoutEffect, useRef } from "react";

function getScrollPosition() {
  if (typeof window === `undefined`)
    return { x: 0, y: 0 }


  return { x: window.scrollX, y: window.scrollY };
}

export function useScrollPosition(effect: (prevPos: number, currPos: number) => void, deps: any[]) {
  const position = useRef(getScrollPosition());

  const callBack = () => {
    const currPos = getScrollPosition()
    effect(position.current.y, currPos.y);
    position.current = currPos;
  }

  useEffect(() => {
    const handleScroll = () => {
      callBack();
    }

    if (window)
      window.addEventListener('scroll', handleScroll);

    return () => {
      if (window)
        window.removeEventListener('scroll', handleScroll);
    };
  }, deps)
}
