import { animated } from "@react-spring/web";
import styled, { css, keyframes } from "styled-components";

import { Placement, Px, TransitionArgs } from "../../../../types/style";
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
export const AnimatedBaseContainer = animated(
  styled.div<AnimatedBaseContainerProps>`
    position: relative;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  `,
);
AnimatedBaseContainer.displayName = "AnimatedBaseContainer";

const BaseShape = styled.div`
  position: absolute;
  height: 100%;
  border-bottom-right-radius: 11px;
`;

export const BaseOutline = styled(BaseShape)<TransitionProps>`
  width: 100%;
  opacity: ${({ open }) => open ? 1 : 0};
  outline: ${({ open }) => open
    ? "2px solid #ffffff00"
    : "5px solid #ffffffff"};

  ${({ transitionProps }) => commonTransition(transitionProps)};
`;
BaseOutline.displayName = "BaseOutline";

export const BaseBlack = styled(BaseShape)<TransitionProps>`
  opacity: ${({ open }) => open ? 1 : 0.1};
  width: ${({ open }) => open ? 100 : 0}%;

  background-color: black;

  ${({ transitionProps }) => commonTransition(transitionProps)};
`;
BaseBlack.displayName = "BaseBlack";

type BaseBackgroundColorProps = {
  teamColor: string,
};
export const BaseBackgroundColor = styled(BaseShape)<BaseBackgroundColorProps & TransitionProps>`
  width: 100%;

  background-color: ${({ teamColor }) => teamColor};
  opacity: ${({ open }) => open ? 0 : 1};

  ${({ transitionProps }) => commonTransition(transitionProps)};
`;
BaseBackgroundColor.displayName = "BaseBackgroundColor";

export const BaseLayout = styled(BaseShape)<TransitionProps>`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  overflow: hidden;

  clip-path: ${({ open }) => open
    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    : "polygon(0 0, 0 0, -50% 100%, -50% 100%)"};

  ${({ transitionProps }) => commonTransition(transitionProps)};
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

  ${({ transitionProps }) => commonTransition(transitionProps)};
`;
TeamColorBar.displayName = "TeamColorBar";

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`;
TextContainer.displayName = "TextContainer";

export const NameContainer = styled.div`
  position: relative;
  top: 5px;
`;
NameContainer.displayName = "NameContainer";

export const FirstName = styled.span`
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #fff;
  font-size: 25px;
`;
FirstName.displayName = "FirstName";

export const LastName = styled.span`
  font-family: ${p => p.theme.fonts.f1Bold};
  text-transform: uppercase;
  color: #fff;
  font-size: 25px;
  margin-left: 5px;
`;
LastName.displayName = "LastName";

export const NumberContainer = styled.div`
  position: relative;
  display: inline;

  bottom: 3px;
  left: 10px;
`;
NumberContainer.displayName = "NumberContainer";

const blinkingAnimation = keyframes`
  0% { opacity: 0.4 }
  14% { opacity: 0 }
  42% { opacity: 0.4 }
  56% { opacity: 0 }
  86% { opacity: 1 }
`;

export const TeamName = styled.div<OpenProps>`
  position: relative;
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #d1d1d1;
  font-size: 20px;

  ${({ open }) => open && css`
    animation: ${blinkingAnimation} 233ms step-end 500ms;
  `}
`;
TeamName.displayName = "TeamName";

type SpacerProps = {
  width?: string,
  height?: string;
};
export const Spacer = styled.div<SpacerProps>`
  width: ${({ width = "0" }) => width};
  height: ${({ height = "0" }) => height};
`;
Spacer.displayName = "Spacer";

type FlagContainerProps = {
  height: Px,
  width: Px,
  right: Px,
};
export const FlagContainer = styled.div<FlagContainerProps & TransitionProps>`
  position: absolute;
  right: ${({ right }) => `${right}px`};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  overflow: hidden;

  opacity: ${({ open }) => open ? 1 : 0};

  ${({ transitionProps }) => commonTransition(transitionProps)};
`;
FlagContainer.displayName = "FlagContainer";

type DriverPortraitContainerProps = {
  placement: Placement,
};
export const DriverPortraitContainer = styled.div<DriverPortraitContainerProps>`
  position: absolute;

  ${({ placement }) => placementStyleRules(placement)}
`;
DriverPortraitContainer.displayName = "DriverPortraitContainer";
