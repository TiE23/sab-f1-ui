import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { VenetianBlindsFilter } from "./styles";
import { wipeCustomDegClip } from "../../../../utils/styling";
import { Corner } from "../../../../types/style";

type VenetianBlindsTransitionProps = {
  blindsColor: string,
  degrees: number,
  duration: number,
  wipeStartingCorner: Corner,
};
export const VenetianBlindsTransition = (
  {
    blindsColor,
    degrees,
    duration,
    wipeStartingCorner,
    children,
  }: React.PropsWithChildren<VenetianBlindsTransitionProps>,
) => {
  const [childRef, {
    height: childHeight,
    width: childWidth,
  }] = useMeasure();

  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration },
  });

  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          clipPath: x.to(x => {
            const [a1, a2, b1, b2, c1, c2] = wipeCustomDegClip(
              childWidth,
              childHeight,
              x,
              wipeStartingCorner,
              degrees,
            );
            return `polygon(${a1}px ${a2}px, ${b1}px ${b2}px, ${c1}px ${c2}px)`;
          }),
        }}
      >
        <VenetianBlindsFilter
          deg={-45}
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
