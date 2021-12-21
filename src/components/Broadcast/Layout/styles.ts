import styled from "styled-components";

type LayoutGridProps = {
  columns?: number,
  rows?: number,
  headerOffset?: number,
};
export const LayoutGrid = styled.div<LayoutGridProps>`
  --columns: ${({ columns = 1 }) => columns};
  --rows: ${({ rows = 1 }) => rows};
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  height: calc(100% - ${({ headerOffset = 0 }) => headerOffset}px);
  width: 100%;
`;
LayoutGrid.displayName = "LayoutGrid";

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
LayoutGridItem.displayName = "LayoutGridItem";
