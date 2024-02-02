import { MutableRefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  onClickOutside: () => void,
  include: MutableRefObject<HTMLElement | null>[] = [],
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !include.some(
          (includeRef) => includeRef.current?.contains(event.target as Node),
        )
      ) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, include]);
};
