import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { VenetianBlindsFilter } from "./styles";
import { wipe45DegClip } from "../../../../utils/styling";

type VenetianBlindsTransitionProps = {
  color: string,
};
export const VenetianBlindsTransition = (
  { color, children }: React.PropsWithChildren<VenetianBlindsTransitionProps>,
) => {
  const [childRef, {
    height: childHeight,
    width: childWidth,
  }] = useMeasure();
  const deg = -45;

  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div onClick={() => {
      console.log(!state);
      toggle(!state);
    }}>
      <animated.div
        style={{
          clipPath: x.to(x => {
            const [a1, a2, b1, b2, c1, c2] = wipe45DegClip(
              childWidth,
              childHeight,
              x,
              "bottomRight",
            );
            return `polygon(${a1}px ${a2}px, ${b1}px ${b2}px, ${c1}px ${c2}px)`;
          }),
        }}
      >
        <VenetianBlindsFilter
          deg={deg}
          transparentWidth={3}
          opaqueWidth={5}
          opaqueColor={color}
          ref={childRef}
        >
          {children}
        </VenetianBlindsFilter>
      </animated.div>
    </div>
  );
};
