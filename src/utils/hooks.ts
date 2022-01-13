import useResizeObserver from "@react-hook/resize-observer";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

/**
 * Proven to be less reliable than using resizeObserver directly.
 * @returns
 */
export const useDimensionsAlt1 = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<DOMRect>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element == null) return;
    setSize(element.getBoundingClientRect());
  }, [ref]);

  useResizeObserver(ref, (entry) => setSize(entry.contentRect));

  // Returning correctly with generics apparently requires type def here.
  return [
    ref,
    size ?? { width: 0, height: 0 },
  ] as [
    React.RefObject<T>,
    DOMRect,
  ];
};

/**
 * Based off the code demo for useResizeObserver.
 * https://github.com/jaredLunde/react-hook/tree/master/packages/resize-observer
 * @param target React Ref
 * @returns
 */
export const useDimensionsAlt2 = <T extends HTMLElement>(target: React.RefObject<T>) => {
  const [size, setSize] = useState<DOMRect>();

  useLayoutEffect(() => {
    setSize(target.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, entry => setSize(entry.contentRect));
  return size ?? { width: 0, height: 0, x: 0, y: 0 };
};
