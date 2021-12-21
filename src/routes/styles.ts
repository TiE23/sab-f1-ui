import styled from "styled-components";

type FullScreenContainerProps = {
  minHeight?: number,
  minWidth?: number,
}

export const FullScreenContainer = styled.div<FullScreenContainerProps>`
  --minHeight: ${({ minHeight = 0 }) => `${minHeight}px`};
  --minWidth: ${({ minWidth = 0 }) => `${minWidth}px`};
  --overflowY: ${({ minHeight }) => minHeight ? "scroll" : "hidden" };
  --overflowX: ${({ minWidth }) => minWidth ? "scroll" : "hidden" };

  height: 100vh;
  width: 100%;

  /* Demand a minimum width/height and scroll to support them. */
  min-height: var(--minHeight);
  min-width: var(--minWidth);
  overflow-y: var(--overflowY);
  overflow-x: var(--overflowX);
`;
FullScreenContainer.displayName = "FullScreenContainer";
