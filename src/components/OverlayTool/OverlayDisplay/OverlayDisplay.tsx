import { useSelector } from "react-redux";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";

import { OverlayItemContainer } from "./styles";

export function OverlayDisplay() {
  const { currentOverlayItem } = useSelector(overlayToolSelector);
  if (currentOverlayItem == null) return null;
  const { id, position } = currentOverlayItem;
  return (
    <OverlayItemContainer position={position}>
      {id}
      <br />
      ({position.x}px {position.y}px)
    </OverlayItemContainer>
  );
}
