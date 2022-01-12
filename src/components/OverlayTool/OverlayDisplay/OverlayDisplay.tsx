import { useSelector, useDispatch } from "react-redux";
import { useTransition, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { setPosition } from "../../../features/overlayTool/overlayToolSlice";

import { OverlayItemContainer } from "./styles";

export function OverlayDisplay() {
  const { currentOverlayItem, visible } = useSelector(overlayToolSelector);
  const dispatch = useDispatch();
  const bindOverlayItem = useDrag((state) => {
    dispatch(setPosition({
      x: state.args[0].xPos + state.delta[0],
      y: state.args[0].yPos + state.delta[1],
    }));
  });

  const xPos = currentOverlayItem?.position.x ?? 0;
  const yPos = currentOverlayItem?.position.y ?? 0;
  const transition = useTransition(visible, {
    from: { top: 50, opacity: 0 },
    enter: {
      top: 0,
      opacity: currentOverlayItem?.opacity ?? 1,
    },
    leave: { top: 50, opacity: 0 },
  });

  if (currentOverlayItem == null) {
    return null;  // Exit - There is no overlay item yet!
  }

  const { id, position } = currentOverlayItem;

  return (
    transition((style, visible) =>
      visible ? (
        <animated.div
          {...bindOverlayItem({ xPos, yPos })}
          style={{
            ...style,
            left: xPos,
            // top: style.top.get() + yPos, // This doesn't work.
            top: yPos,
            position: "absolute",
          }}
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
