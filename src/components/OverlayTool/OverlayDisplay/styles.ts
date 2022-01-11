import styled from "styled-components";
import { OverlayPosition } from "../../../types/state";

export type OverlayItemContainerProps = {
  position: OverlayPosition,
};
export const OverlayItemContainer = styled.div.attrs<OverlayItemContainerProps>(({
  position: { x, y },
}) => ({
  style: {
    top: y,
    left: x,
  },
}))<OverlayItemContainerProps>`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 7px 11px 1px black;
`;
