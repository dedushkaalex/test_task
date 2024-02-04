import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  deps: React.DependencyList = []
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = ref?.current;
      if (!el || el.contains((e?.target as Node) || null)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ...deps]);
};
