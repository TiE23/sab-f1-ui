import { animated } from "@react-spring/web";
import styled from "styled-components";

import { Degrees, Px } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";

type VenetianBlindsFilterProps = {
  blindsAngle: Degrees,
  transparentWidth: Px,
  opaqueWidth: Px,
  blindsColor: string,
  blindsColorFadeDuration: Milliseconds,
  blindsColorFadeDelay?: Milliseconds,
  blindsClosed: boolean,
  mirror?: boolean,
};
export const VenetianBlindsFilter = styled.div<VenetianBlindsFilterProps>`
  position: ${({ mirror }) => mirror ? "absolute" : null};

  --A: ${({ mirror }) => mirror ? "transparent" : "black"};
  --B: ${({ mirror }) => mirror ? "black" : "transparent"};

  mask-image: repeating-linear-gradient(
    ${({ blindsAngle }) => blindsAngle}deg,
    var(--A),
    var(--A) ${({ opaqueWidth }) => opaqueWidth}px,
    var(--B) ${({ opaqueWidth }) => opaqueWidth}px,
    var(--B) ${({ transparentWidth, opaqueWidth }) => transparentWidth + opaqueWidth}px
  );

  > * {
    box-shadow: inset 0 0 0 99999px ${({ blindsColor, blindsClosed }) =>
    `${blindsColor}${blindsClosed ? "00" : "cc"}`};
    transition: box-shadow
    ${({ blindsColorFadeDuration }) => blindsColorFadeDuration}ms
    cubic-bezier(0.88, 0.18, 0.96, 0.75)
    ${({ blindsColorFadeDelay = 0 }) => blindsColorFadeDelay}ms;
  }
`;
VenetianBlindsFilter.displayName = "VenetianBlindsFilter";

export const AnimatedVenetianBlindsFilter = animated(VenetianBlindsFilter);
AnimatedVenetianBlindsFilter.displayName = "AnimatedVenetianBlindsFilter";
