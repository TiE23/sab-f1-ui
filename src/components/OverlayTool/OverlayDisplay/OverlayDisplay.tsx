import { useSelector } from "react-redux";
import { useTransition, animated } from "@react-spring/web";

import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";

import { OverlayItemContainer } from "./styles";

export function OverlayDisplay() {
  const { currentOverlayItem, visible } = useSelector(overlayToolSelector);

  const xPos = currentOverlayItem?.position.x ?? 0;
  const yPos = currentOverlayItem?.position.y ?? 0;
  const transition = useTransition(visible, {
    from: { left: xPos, top: yPos + 50, opacity: 0 },
    enter: {
      left: xPos,
      top: yPos,
      opacity: currentOverlayItem?.opacity ?? 1,
    },
    leave: { left: xPos, top: yPos + 50, opacity: 0 },
  });

  if (currentOverlayItem == null) {
    return null;  // Exit - There is no overlay item yet!
  }

  const { id, position } = currentOverlayItem;

  return (
    transition((style, visible) =>
      visible ? (
        <animated.div
          style={{ ...style, position: "absolute" }}
        >
          <OverlayItemContainer position={position} visible={visible}>
            {id}
            <br />
            (x:{position.x}px, y:{position.y}px)
          </OverlayItemContainer>
        </animated.div>
      ) : null,
    )
  );
}
