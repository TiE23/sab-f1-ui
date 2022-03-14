import styled from "styled-components/macro";

type SizeProp = number | Array<number | string>;

/**
 * Slickly handle different values
 * @param prop a number will use 1fr repeated. An array will interpret numbers
 * as fractions. Else you can define anything with strings (such as "100px").
 * @returns
 */
const parseSize = (prop: SizeProp): string => {
  if (typeof prop === "number") {
    return `repeat(${prop}, 1fr)`;
  }
  if (Array.isArray(prop)) {
    return prop.map(value => {
      if (typeof value === "number") {
        return value + "fr";
      } else {
        return value;
      }
    }).join(" ");
  }
  return "1";
};

type LayoutGridProps = {
  columns?: SizeProp,
  rows?: SizeProp,
  headerOffset?: number,
};
export const LayoutGrid = styled.div<LayoutGridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => parseSize(columns)};
  grid-template-rows: ${({ rows = 1 }) => parseSize(rows)};
  height: calc(100% - ${({ headerOffset = 0 }) => headerOffset}px);
  width: 100%;
`;

type LayoutGridItemProps = {
  column: number,
  columnSpan?: number,
  row: number,
  rowSpan?: number,
};
export const LayoutGridItem = styled.div<LayoutGridItemProps>`
  grid-column: ${({ column }) => column}
    / span ${({ columnSpan = 1 }) => columnSpan};
  grid-row: ${({ row }) => row}
    / span ${({ rowSpan = 1 }) => rowSpan};;
`;
