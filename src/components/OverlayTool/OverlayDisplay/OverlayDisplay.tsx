import { useSelector, useDispatch } from "react-redux";
import { useTransition, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { setPosition } from "../../../features/overlayTool/overlayToolSlice";

import { OverlayItemContainer } from "./styles";

export function OverlayDisplay() {
  const {
    currentOverlayId,
    currentOverlayItem,
    visible,
  } = useSelector(overlayToolSelector);

  const dispatch = useDispatch();

  const bindOverlayItem = useDrag(({ args, delta }) => {
    dispatch(setPosition({
      x: args[0].xPos + delta[0],
      y: args[0].yPos + delta[1],
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

  // Cannot make an earlier return because all hooks must run or React gets mad.
  if (currentOverlayId == null || currentOverlayItem == null) {
    return null;
  }

  const { position } = currentOverlayItem;

  return transition((style, visible) =>
    visible ? (
      <animated.div
        {...bindOverlayItem({ xPos, yPos })}
        style={{
          left: xPos,
          top: yPos,
          position: "absolute",
          touchAction: "none",
          zIndex: 1,
        }}
      >
        <animated.div style={{ ...style, position: "absolute" }}>
          <OverlayItemContainer visible={visible} tempColor={currentOverlayId}>
            {currentOverlayId}
            <br />
            (x:{Math.floor(position.x)}px, y:{Math.floor(position.y)}px)
          </OverlayItemContainer>
        </animated.div>
      </animated.div>
    ) : null,
  );
}
