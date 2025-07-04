"use client";

import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = elRef.current;

    const whellHandler = (e: WheelEvent) => {
      const container = elRef.current;

      if (container) {
        const delta = e.deltaY;
        container.scrollLeft += delta;
        e.preventDefault();
      }
    };

    if (container) {
      container.addEventListener("wheel", whellHandler, { passive: false });

      return () => {
        container.removeEventListener("wheel", whellHandler);
      };
    }

    return () => {};
  }, []);

  return elRef;
}
