import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { AnimatedVenetianBlindsFilter, VenetianBlindsFilter } from "./styles";
import { wipeCustomDegClip } from "../../../../utils/styling";
import { Corner, Degrees, Fraction, Px } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";

type VenetianBlindsTransitionProps = {
  blindsColor: string,
  blindsColorFadeDuration: Milliseconds,
  blindsColorFadeDelay?: Milliseconds,
  blindsAngle: Degrees,
  blindsOpenDuration: Milliseconds,
  blindsOpenDelay?: Milliseconds,
  blindsSize: { opaque: Px, transparent: Px },
  wipeAngle: Degrees,
  wipeDuration: Milliseconds,
  wipeStartingCorner: Corner,
  opacityStart?: Fraction,
  opacityDuration?: Milliseconds,
  opacityDelay?: Milliseconds,
  spanBlinkDuration?: Milliseconds,
};
export const VenetianBlindsTransition = (
  {
    blindsColor,
    blindsColorFadeDuration,
    blindsColorFadeDelay = 0,
    blindsAngle,
    blindsOpenDuration,
    blindsOpenDelay = 0,
    blindsSize,
    wipeAngle,
    wipeDuration,
    wipeStartingCorner,
    opacityStart = 1,
    opacityDuration = wipeDuration,
    opacityDelay = 0,
    spanBlinkDuration,
    children,
  }: React.PropsWithChildren<VenetianBlindsTransitionProps>,
) => {
  const [childRef, {
    height: childHeight,
    width: childWidth,
  }] = useMeasure();

  const [state, toggle] = useState(true);

  const { wipe } = useSpring({
    wipe: state ? 1 : 0,
    config: { duration: wipeDuration },
  });

  const { opacity } = useSpring({
    opacity: state ? 1 : opacityStart,
    config: { duration: opacityDuration },
    delay: opacityDelay,
  });

  const blindsSpring = useSpring({
    opacity: state ? 1 : 0,
    config: { duration: blindsOpenDuration },
    delay: blindsOpenDelay,
  });

  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          opacity,
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
        ref={childRef}
      >
        <AnimatedVenetianBlindsFilter
          style={blindsSpring}
          blindsAngle={blindsAngle}
          transparentWidth={blindsSize.transparent}
          opaqueWidth={blindsSize.opaque}
          blindsColor={blindsColor}
          blindsColorFadeDuration={blindsColorFadeDuration}
          blindsColorFadeDelay={blindsColorFadeDelay}
          blindsClosing={!!state}
          spanBlinkDuration={spanBlinkDuration}
          mirror={true}  // Mirror version provides the opposite blinds.
        >
          {children}
        </AnimatedVenetianBlindsFilter>
        <VenetianBlindsFilter
          blindsAngle={blindsAngle}
          transparentWidth={blindsSize.transparent}
          opaqueWidth={blindsSize.opaque}
          blindsColor={blindsColor}
          blindsColorFadeDuration={blindsColorFadeDuration}
          blindsColorFadeDelay={blindsColorFadeDelay}
          blindsClosing={!!state}
          spanBlinkDuration={spanBlinkDuration}
          mirror={false}
        >
          {children}
        </VenetianBlindsFilter>
      </animated.div>
    </div>
  );
};
