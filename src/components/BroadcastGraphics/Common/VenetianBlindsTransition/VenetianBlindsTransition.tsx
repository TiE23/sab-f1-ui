import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { AnimatedVenetianBlindsFilter, VenetianBlindsFilter } from "./styles";
import { wipeCustomDegClip } from "../../../../utils/styling";
import { Corner, Degrees, Fraction, Px } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";

type VenetianBlindsTransitionProps = {
  visible: boolean,
  delay?: Milliseconds,
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
    visible,
    delay = 0,
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

  const { wipe } = useSpring({
    wipe: visible ? 1 : 0,
    config: { duration: wipeDuration },
    delay: 0 + delay,
  });

  const { opacity } = useSpring({
    opacity: visible ? 1 : opacityStart,
    config: { duration: opacityDuration },
    delay: opacityDelay + delay,
  });

  const blindsSpring = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: blindsOpenDuration },
    delay: blindsOpenDelay + delay,
  });

  return (
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
        blindsColorFadeDelay={blindsColorFadeDelay + delay}
        blindsClosing={visible}
        spanBlinkDuration={spanBlinkDuration}
        spanBlinkDelay={delay}
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
        blindsColorFadeDelay={blindsColorFadeDelay + delay}
        blindsClosing={visible}
        spanBlinkDuration={spanBlinkDuration}
        spanBlinkDelay={delay}
        mirror={false}
      >
        {children}
      </VenetianBlindsFilter>
    </animated.div>
  );
};
