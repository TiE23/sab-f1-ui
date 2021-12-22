import React, { useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const useDimensions = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (element == null) return;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) return;
      if (!entries.length) return;

      const entry = entries[0];
      const boundingRect = entry.target.getBoundingClientRect();
      if (width !== boundingRect.width) setWidth(boundingRect.width);
      if (height !== boundingRect.height) setHeight(boundingRect.height);
    });
    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [height, width]);

  // Returning correctly with generics apparently requires type def here.
  return [
    ref,
    { width, height },
  ] as [
    React.RefObject<T>,
    { height: number, width: number },
  ];
};
