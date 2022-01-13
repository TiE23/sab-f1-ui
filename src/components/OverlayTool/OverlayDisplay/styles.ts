import styled from "styled-components";

export type OverlayItemContainerProps = {
  visible: boolean,
  tempColor: string,
};
export const OverlayItemContainer = styled.div.attrs<OverlayItemContainerProps>(({
  visible,
}) => ({
  style: {
    display: visible ? undefined : "none",
  },
}))<OverlayItemContainerProps>`
  /* Temporary. Overlay will be transparent and based on an image. */
  width: 150px;
  height: 150px;
  background-color: ${({ tempColor }) => tempColor};
  box-shadow: 0px 7px 11px 1px black;
`;
OverlayItemContainer.displayName = "OverlayItemContainer";

