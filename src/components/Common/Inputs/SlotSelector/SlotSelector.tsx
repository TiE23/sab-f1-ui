import { useEffect, useMemo, useState } from "react";
import { animated, useSpringRef, useTransition } from "@react-spring/web";

import { findPrefixCount } from "../../../../utils/strings";
import { SelectorLabel, SlotText, SlotWindow } from "./styles";
import { Inline } from "@bedrock-layout/inline";

type SlotSelectorProps = {
  items: Array<string>,
  onChange: (index: number) => void,
  label?: string,
  removePrefix?: boolean,
  formatter?: (value: string) => string,
  initialIndex?: number,
  disabled?: boolean,
};
/**
 * If items are defined in a component make sure they are stateful to prevent
 * random resets of the index during changes.
 */
export function SlotSelector({
  items,
  onChange,
  label,
  removePrefix = false,
  formatter = (x) => x,
  initialIndex = 0,
  disabled = false,
}: SlotSelectorProps) {
  const [index, setIndex] = useState(initialIndex);
  const [prefixMask, setPrefixMask] = useState(0);
  const [formattedItems, setFormattedItems] = useState<Array<string>>([]);

  useEffect(() => {
    setIndex(initialIndex);
  }, [items]);

  // useMemo makes these functions only run once when mounting. Not every re-render.
  useMemo(() => {
    const tempFormattedItems = items.map(item => formatter(item));
    setFormattedItems(tempFormattedItems);
    setPrefixMask(findPrefixCount(tempFormattedItems));
  }, [items]);

  const onClick = () => {
    if (disabled) return;
    const nextIndex = (index + 1) % items.length;
    setIndex(nextIndex);
    onChange(nextIndex);
  };

  const getItem = (i: number) =>
    formattedItems.length &&
      removePrefix &&
      formattedItems[0].length !== prefixMask ?
      formattedItems[i]?.slice(prefixMask) ?? undefined :
      formattedItems[i];

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0%, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <Inline gutter="sm" stretch="end" align="end">
      {(label ?? null) && (
        <SelectorLabel>{label}</SelectorLabel>
      )}
      <SlotWindow onClick={onClick} disabled={disabled}>
        {transitions((style, i) => (
          <SlotText as={animated.span} style={style}>{getItem(i)}</SlotText>
        ))}
      </SlotWindow>
    </Inline>
  );
}
