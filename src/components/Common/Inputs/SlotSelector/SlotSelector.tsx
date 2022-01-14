import { useMemo, useState } from "react";
import { findPrefixCount } from "../../../../utils/strings";
import { SlotText, SlotWindow } from "./styles";

type SlotSelectorProps = {
  items: Array<string>,
  onChange: (value: string) => void,  // eslint-disable-line no-unused-vars
  removePrefix?: boolean,
  formatter?: (value: string) => string,  // eslint-disable-line no-unused-vars
  initialIndex?: number,
}
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

  useMemo(() => {
    const tempFormattedItems = items.map(item => formatter(item));
    setFormattedItems(tempFormattedItems);
    setPrefixMask(findPrefixCount(tempFormattedItems));
  }, [items]);

  const getNextIndex = (i: number) => (i + 1) % items.length;
  const getPreviousIndex = (i: number) => i - 1 >= 0 ? i - 1 : items.length - 1;

  const onClick = () => {
    const nextIndex = getNextIndex(index);
    setIndex(nextIndex);
    onChange(items[nextIndex]);
  };

  const getItem = (i: number) =>
    formattedItems.length &&
      removePrefix &&
      formattedItems[0].length !== prefixMask ?
      formattedItems[i].slice(prefixMask) :
      formattedItems[i];

  const currentItem = getItem(index);
  const nextItem = getItem(getNextIndex(index));

  return (
    <SlotWindow
      onClick={onClick}
    >
      <SlotText>{currentItem}</SlotText>
      <SlotText>{nextItem}</SlotText>
    </SlotWindow>
  );
}
