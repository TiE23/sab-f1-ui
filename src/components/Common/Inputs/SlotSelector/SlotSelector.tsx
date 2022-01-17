import { useEffect, useMemo, useState } from "react";
import { animated, useSpringRef, useTransition } from "@react-spring/web";

import { findPrefixCount } from "../../../../utils/strings";
import { SlotText, SlotWindow } from "./styles";

type SlotSelectorProps = {
  items: Array<string>,
  onChange: (value: string) => void,
  removePrefix?: boolean,
  formatter?: (value: string) => string,
  initialIndex?: number,
};
export function SlotSelector({
  items,
  onChange,
  removePrefix = false,
  formatter = (x) => x,
  initialIndex = 0,
}: SlotSelectorProps) {
  const [index, setIndex] = useState(initialIndex);
  const [prefixMask, setPrefixMask] = useState(0);
  const [formattedItems, setFormattedItems] = useState<Array<string>>([]);

  // useMemo makes these functions only run once when mounting. Not ever re-render.
  useMemo(() => {
    const tempFormattedItems = items.map(item => formatter(item));
    setFormattedItems(tempFormattedItems);
    setPrefixMask(findPrefixCount(tempFormattedItems));
  }, [items]);

  const onClick = () => {
    const nextIndex = (index + 1) % items.length;
    setIndex(nextIndex);
    onChange(items[nextIndex]);
  };

  const getItem = (i: number) =>
    formattedItems.length &&
      removePrefix &&
      formattedItems[0].length !== prefixMask ?
      formattedItems[i].slice(prefixMask) :
      formattedItems[i];

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0, 100%, 0" },
    enter: { opacity: 1, transform: "translate3d(0, 0%, 0" },
    leave: { opacity: 0, transform: "translate3d(0, -100%, 0" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <SlotWindow onClick={onClick}>
      {transitions((style, i) => (
        <SlotText as={animated.span} style={style}>{getItem(i)}</SlotText>
      ))}
    </SlotWindow>
  );
}
