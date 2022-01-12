import styled from "styled-components";
import { OverlayPosition } from "../../../types/state";

export type OverlayItemContainerProps = {
  position: OverlayPosition,
  visible: boolean,
};
export const OverlayItemContainer = styled.div.attrs<OverlayItemContainerProps>(({
  position: { x, y },
  visible,
}) => ({
  style: {
    top: y,
    left: x,
    display: visible ? undefined : "none",
  },
}))<OverlayItemContainerProps>`
  position: absolute;

  /* Temporary. Overlay will be transparent and based on an image. */
  width: 150px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 7px 11px 1px black;
`;
