import { animated, easings, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { Corner, Degrees, Fraction } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";
import { wipeCustomDegClip } from "../../../../utils/styling";

type WipeTransitionProps = {
  visible: boolean,
  delay?: Milliseconds,
  angle: Degrees,
  duration: Milliseconds,
  startingCorner: Corner,
  opacityStart?: Fraction,
  opacityDuration?: Milliseconds,
  opacityDelay?: Milliseconds,
}

export function WipeTransition({
  visible,
  delay = 0,
  angle,
  duration,
  startingCorner,
  opacityStart = 1,
  opacityDuration = duration,
  opacityDelay = 0,
  children,
}: React.PropsWithChildren<WipeTransitionProps>) {
  const [childRef, {
    height: childHeight,
    width: childWidth,
  }] = useMeasure();

  const { wipe } = useSpring({
    wipe: visible ? 1 : 0,
    config: {
      duration: duration,
      easing: easings.easeInOutQuint,
    },
    delay: 0 + delay,
  });

  const { opacity } = useSpring({
    opacity: visible ? 1 : opacityStart,
    config: { duration: opacityDuration },
    delay: opacityDelay + delay,
  });

  return (
    <animated.div
      style={{
        opacity,
        clipPath: wipe.to(wipeProgress => {
          const coordinates = wipeCustomDegClip(
            childWidth,
            childHeight,
            wipeProgress,
            startingCorner,
            angle,
          );
          return `polygon(${coordinates.map(([x, y]) => `${x}px ${y}px`).join(", ")})`;
        }),
      }}
      ref={childRef}
    >
      {children}
    </animated.div>
  );
}
