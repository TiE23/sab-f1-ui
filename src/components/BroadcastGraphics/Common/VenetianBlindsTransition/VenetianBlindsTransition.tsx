import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { VenetianBlindsFilter } from "./styles";
import { wipeCustomDegClip } from "../../../../utils/styling";
import { Corner } from "../../../../types/style";

type VenetianBlindsTransitionProps = {
  blindsColor: string,
  blindsAngle: number,
  wipeAngle: number,
  wipeDuration: number,
  wipeStartingCorner: Corner,
};
export const VenetianBlindsTransition = (
  {
    blindsColor,
    blindsAngle,
    wipeAngle,
    wipeDuration,
    wipeStartingCorner,
    children,
  }: React.PropsWithChildren<VenetianBlindsTransitionProps>,
) => {
  const [childRef, {
    height: childHeight,
    width: childWidth,
  }] = useMeasure();

  const [state, toggle] = useState(true);

  const { wipe } = useSpring({
    from: { wipe: 0 },
    wipe: state ? 1 : 0,
    config: { duration: wipeDuration },
  });

  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          clipPath: wipe.to(wipeProgress => {
            const [a1, a2, b1, b2, c1, c2] = wipeCustomDegClip(
              childWidth,
              childHeight,
              wipeProgress,
              wipeStartingCorner,
              wipeAngle,
            );
            return `polygon(${a1}px ${a2}px, ${b1}px ${b2}px, ${c1}px ${c2}px)`;
          }),
        }}
      >
        <VenetianBlindsFilter
          deg={blindsAngle}
          transparentWidth={3}
          opaqueWidth={5}
          opaqueColor={blindsColor}
          ref={childRef}
        >
          {children}
        </VenetianBlindsFilter>
      </animated.div>
    </div>
  );
};
