import { animated } from "@react-spring/web";
import styled, { css, keyframes } from "styled-components/macro";

import { Degrees, Px } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";

const spanBlinkAnimation = keyframes`
  0% { opacity: 0 }
  62% { opacity: 1 }
  72% { opacity: 0 }
  81% { opacity: 1 }
  91% { opacity: 0 }
  100% { opacity: 1 }
`;

type VenetianBlindsFilterProps = {
  blindsAngle: Degrees,
  transparentWidth: Px,
  opaqueWidth: Px,
  blindsColor: string,
  blindsColorFadeDuration: Milliseconds,
  blindsColorFadeDelay?: Milliseconds,
  blindsClosing: boolean,
  mirror?: boolean,
  spanBlinkDuration?: Milliseconds,
  spanBlinkDelay?: Milliseconds,
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
    box-shadow: inset 0 0 0 99999px ${({ blindsColor, blindsClosing }) =>
    `${blindsColor}${blindsClosing ? "00" : "cc"}`};
    transition: box-shadow
    ${({ blindsColorFadeDuration }) => blindsColorFadeDuration}ms
    cubic-bezier(0.88, 0.18, 0.96, 0.75)
    ${({ blindsColorFadeDelay = 0 }) => blindsColorFadeDelay}ms;
  }

  ${({ blindsClosing, spanBlinkDuration, spanBlinkDelay = 0 }) => (
    blindsClosing && spanBlinkDuration
      ? css`
        span {
          animation: ${spanBlinkAnimation} ${spanBlinkDuration}ms step-end ${spanBlinkDelay}ms;
        };
      `
      : null)
}
`;

export const AnimatedVenetianBlindsFilter = animated(VenetianBlindsFilter);
