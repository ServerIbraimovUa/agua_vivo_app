import { RefObject, useEffect } from "react";

export function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback, ref]);
}
