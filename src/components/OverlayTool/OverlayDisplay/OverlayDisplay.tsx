import { useSelector, useDispatch } from "react-redux";
import { useTransition, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { useDimensions } from "../../../utils/hooks";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { setPosition } from "../../../features/overlayTool/overlayToolSlice";

import { OverlayItemContainer } from "./styles";

type OverlayDisplayProps = {
  containerDimensions: {
    width: number,
    height: number,
  },
  bleedover?: number,
};
export function OverlayDisplay({
  containerDimensions: { width: containerWidth, height: containerHeight },
  bleedover = 0,
}: OverlayDisplayProps) {
  const dispatch = useDispatch();
  const {
    currentOverlayId,
    currentOverlayItem,
    visible,
  } = useSelector(overlayToolSelector);

  // Monitor element dimensions to calculate min/max drag coordinates.
  const [overlayItemRef, {
    width: overlayItemWidth,
    height: overlayItemHeight,
  }] = useDimensions<HTMLDivElement>();
  const
    minX = -bleedover,
    minY = -bleedover,
    maxX = containerWidth - overlayItemWidth + bleedover,
    maxY = containerHeight - overlayItemHeight + bleedover;

  const bindOverlayItem = useDrag(({ args, delta }) => {
    const newX = args[0].xPos + delta[0];
    const newY = args[0].yPos + delta[1];
    dispatch(setPosition({
      x: newX >= minX && newX <= maxX ? newX : args[0].xPos,
      y: newY >= minY && newY <= maxY ? newY : args[0].yPos,
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
          <OverlayItemContainer
            ref={overlayItemRef}
            visible={visible}
            tempColor={currentOverlayId}
          >
            {currentOverlayId}
            <br />
            (x:{Math.floor(position.x)}px, y:{Math.floor(position.y)}px)
          </OverlayItemContainer>
        </animated.div>
      </animated.div>
    ) : null,
  );
}
