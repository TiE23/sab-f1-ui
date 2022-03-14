import { animated } from "@react-spring/web";
import styled, { css, keyframes } from "styled-components/macro";

import { Placement, Px, TransitionArgs } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";
import { commonTransition, placementStyleRules } from "../../../../utils/styling";

type OpenProps = {
  open: boolean,
};
type TransitionProps = OpenProps & {
  transitionProps: TransitionArgs[],
};

type AnimatedBaseContainerProps = {
  width: Px,
  height: Px,
};
export const AnimatedBaseContainer = animated(styled.div<AnimatedBaseContainerProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`);

const BaseShape = styled.div`
  position: absolute;
  height: 100%;
  border-bottom-right-radius: 11px;
`;

type AnimatedBaseOutlineProps = TransitionProps & {
  startThickness: Px,
  endThickness: Px,
  startColor: string,
  endColor: string,
};
export const AnimatedBaseOutline = animated(styled(BaseShape)<AnimatedBaseOutlineProps>`
  width: 100%;
  opacity: ${({ open }) => open ? 1 : 0};
  outline: ${({ open, startThickness, endThickness, startColor, endColor }) => open
    ? `${endThickness}px solid ${endColor}`
    : `${startThickness}px solid ${startColor}`};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`);

export const BaseBlack = styled(BaseShape)<TransitionProps>`
  opacity: ${({ open }) => open ? 1 : 0.1};
  width: ${({ open }) => open ? 100 : 0}%;

  background-color: black;

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

type BaseBackgroundColorProps = {
  teamColor: string,
};
export const BaseBackgroundColor = styled(BaseShape)<BaseBackgroundColorProps & TransitionProps>`
  width: 100%;

  background-color: ${({ teamColor }) => teamColor};
  opacity: ${({ open }) => open ? 0 : 1};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

export const BaseLayout = styled(BaseShape)<TransitionProps>`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  overflow: hidden;

  clip-path: ${({ open }) => open
    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    : "polygon(0 0, 0 0, -40% 100%, -40% 100%)"};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

type TeamColorBarProps = {
  color: string,
};
export const TeamColorBar = styled.div<TeamColorBarProps & TransitionProps>`
  position: relative;
  width: 1%;  // 6px;
  height: 63%;

  background-color: ${({ color }) => color};

  clip-path: ${({ open }) => open
    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    : "polygon(-100% 0, 200% 0, 200% 0, -100% 0)"};

  outline: ${({ color }) => color} solid 1px;

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const NameContainer = styled.div`
  position: relative;
  top: 5px;
`;

export const FirstName = styled.span`
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #fff;
  font-size: 25px;
`;

export const LastName = styled.span`
  font-family: ${p => p.theme.fonts.f1Bold};
  text-transform: uppercase;
  color: #fff;
  font-size: 25px;
  margin-left: 5px;
`;

export const NumberContainer = styled.div`
  position: relative;
  display: inline;

  bottom: 3px;
  left: 10px;
`;

const blinkingAnimation = keyframes`
  0% { opacity: 0.4 }
  14% { opacity: 0 }
  42% { opacity: 0.4 }
  56% { opacity: 0 }
  86% { opacity: 1 }
`;

type TeamNameProps = OpenProps & {
  duration: Milliseconds,
  delay: Milliseconds,
}
export const TeamName = styled.div<TeamNameProps>`
  position: relative;
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #d1d1d1;
  font-size: 20px;

  ${({ open, duration, delay }) => open && css`
    animation: ${blinkingAnimation} ${duration}ms step-end ${delay}ms;
  `}
`;

type FlagContainerProps = {
  height: Px,
  width: Px,
  right: Px,
};
export const FlagContainer = styled.div<FlagContainerProps & TransitionProps>`
  position: absolute;
  right: ${({ right, open }) => open ? right : right * -3}px;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  overflow: hidden;

  opacity: ${({ open }) => open ? 1 : 0};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

type DriverPortraitContainerProps = TransitionProps & {
  placement: Placement,
};
export const DriverPortraitContainer = styled.div<DriverPortraitContainerProps>`
  position: absolute;

  ${({ placement }) => placementStyleRules(placement)}

  opacity: ${({ open }) => open ? 1 : 0};
  ${({ transitionProps }) => commonTransition(transitionProps)}
`;
