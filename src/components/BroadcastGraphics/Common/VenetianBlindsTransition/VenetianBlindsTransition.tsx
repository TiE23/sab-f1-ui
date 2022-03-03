import { useSpring } from "@react-spring/web";

import { AnimatedVenetianBlindsFilter, VenetianBlindsFilter } from "./styles";
import { Corner, Degrees, Fraction, Px } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";
import { WipeTransition } from "../WipeTransition";

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
export function VenetianBlindsTransition(
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
) {
  const blindsSpring = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: blindsOpenDuration },
    delay: blindsOpenDelay + delay,
  });

  return (
    <WipeTransition
      visible={visible}
      delay={delay}
      angle={wipeAngle}
      duration={wipeDuration}
      startingCorner={wipeStartingCorner}
      opacityStart={opacityStart}
      opacityDuration={opacityDuration}
      opacityDelay={opacityDelay}
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
    </WipeTransition>
  );
}
