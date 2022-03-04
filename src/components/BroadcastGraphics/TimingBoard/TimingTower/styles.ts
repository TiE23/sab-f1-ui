import styled, { css } from "styled-components";
import { animated } from "@react-spring/web";

import { Fraction, Px, TransitionArgs } from "../../../../types/style";
import { Milliseconds } from "../../../../types/util";
import { commonTransition } from "../../../../utils/styling";

import fastestLapIcon from "../../../../public/images/icons/fastest-lap.svg";


type OpenProps = {
  open: boolean,
};
type TransitionProps = {
  transitionProps: TransitionArgs[],
};

type RowsContainerProps = {
  carsToDisplay: number,
  retiredCarsPresent: boolean,
};
export const RowsContainer = styled.div<RowsContainerProps>`
  position: relative;

  width: ${p =>
    p.theme.design.timingTower.rowLeftHalfWidthPx
      + p.theme.design.timingTower.rowRightHalfWidthPx}px;
  height: ${({ theme, carsToDisplay, retiredCarsPresent }) =>
    theme.design.timingTower.rowHeightPx * carsToDisplay + (retiredCarsPresent ? 3 : 0)}px;

  overflow-y: clip; // hidden doesn't work for some reason.
`;
RowsContainer.displayName = "RowsContainer";

type AnimatedRowContainerProps = {
  retired?: boolean,
  wide?: boolean,
  top: Px,
  transitionTime: Milliseconds,
};
// All the elements in a row should go in here.
export const AnimatedRowContainer = animated(styled.div.attrs<AnimatedRowContainerProps>(({
  top,
  retired,
}) => ({
  style: {
    top: `${top + (retired ? 3 : 0)}px`,
  },
}))<AnimatedRowContainerProps>`
  position: absolute;
  left: 0;
  transition: top ${({ transitionTime }) => transitionTime}ms;

  width: ${({ wide }) => wide ? 255 : 147}px;
  height: ${p => p.theme.design.timingTower.rowHeightPx}px; // Future will be animated.

  ${({ retired }) => retired && css`opacity: 0.7;`}
`);
AnimatedRowContainer.displayName = "AnimatedRowContainer";

type RoundedProp = {
  roundedCornerTop?: Px,
  roundedCornerBottom?: Px,
};
const Rounded = styled.div<RoundedProp>`
  border-top-right-radius: ${({ roundedCornerTop = 0 }) => roundedCornerTop}px;
  border-bottom-right-radius: ${({ roundedCornerBottom = 0 }) => roundedCornerBottom}px;
`;

type RowLeftHalfProps = TransitionProps & {
  wide: boolean,
};
export const RowLeftHalf = styled(Rounded)<RowLeftHalfProps>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  overflow-x: clip;

  width: ${({ theme: { design: { timingTower } }, wide }) =>
    (wide ? timingTower.rowRightHalfWidthPx : 0) + timingTower.rowLeftHalfWidthPx}px;
  height: ${p => p.theme.design.timingTower.rowHeightPx}px;

  background-color: #000000e5;

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;
RowLeftHalf.displayName = "RowLeftHalf";

type AnimatedRowLeftHalfOutlineProps = OpenProps & TransitionProps & {
  startThickness: Px,
  endThickness: Px,
  startColor: string,
  endColor: string,
};
export const AnimatedRowLeftHalfOutline = animated(styled(Rounded) <AnimatedRowLeftHalfOutlineProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: ${({ open }) => open ? 1 : 0};
  outline: ${({ open, startThickness, endThickness, startColor, endColor }) => open
    ? `${endThickness}px solid ${endColor}`
    : `${startThickness}px solid ${startColor}`};
  outline-offset: ${({ startThickness }) => -startThickness}px;

  ${({ transitionProps }) => commonTransition(transitionProps)}
`);
AnimatedRowLeftHalfOutline.displayName = "AnimatedRowLeftHalfOutline";

export const RowLeftHalfLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  padding-left: 3px;

  /* align-items: center; */
  justify-content: flex-start;
`;
RowLeftHalfLayout.displayName = "RowLeftHalfLayout";

type RowLeftHalfPosFlagContainerProps = {
  size: Px,
};
export const RowLeftHalfPosFlagContainer = styled.div<RowLeftHalfPosFlagContainerProps>`
  position: relative;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;
RowLeftHalfPosFlagContainer.displayName = "RowLeftHalfPosFlagContainer";

type RowLeftHalfPosFlagChangeContainerProps = {
  size: Px,
  visible: boolean,
  transitionTime: Milliseconds,
};
export const RowLeftHalfPosFlagChangeContainer = styled.div<RowLeftHalfPosFlagChangeContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity ${({ transitionTime }) => transitionTime}ms;
`;
RowLeftHalfPosFlagChangeContainer.displayName = "RowLeftHalfPosFlagChangeContainer";

export const RowLeftHalfGemContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 2px;
`;
RowLeftHalfGemContainer.displayName = "RowLeftHalfGemContainer";

type RowRightHalfProps = TransitionProps & {
  collapsed: boolean,
  hugRight: boolean,
};
export const RowRightHalf = styled(Rounded)<RowRightHalfProps>`
  position: absolute;
  ${({ hugRight }) => hugRight
    ? css`right: 0;` : css`
    left: ${p => p.theme.design.timingTower.rowLeftHalfWidthPx}px;
  `}
  top: 0;

  width: ${({ theme: { design: { timingTower } }, collapsed }) =>
    collapsed ? 0 : timingTower.rowRightHalfWidthPx}px;
  height: ${p => p.theme.design.timingTower.rowHeightPx}px;

  overflow-x: clip;

  background-color: #0000007e;

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;
RowRightHalf.displayName = "RowRightHalf";

export const RowRightHalfLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
`;
RowRightHalfLayout.displayName = "RowRightHalfLayout";

type DriverNameProps = {
  visible: boolean,
};
export const DriverName = styled.span<DriverNameProps>`
  position: absolute;
  top: 0;
  left: 0;

  opacity: ${({ visible }) => visible ? 1 : 0};

  color: white;
  font-family: ${p => p.theme.fonts.f1Bold};
  font-size: 20px;
  text-transform: uppercase;
`;
DriverName.displayName = "DriverName";

export const DriverNameContainer = styled.div<TransitionProps>`
  position: relative;
  margin-left: 14px;

  > span {
    ${({ transitionProps }) => commonTransition(transitionProps)}
  }
`;
DriverNameContainer.displayName = "DriverNameContainer";

type TimeDiffProps = TransitionProps & {
  xScale: Fraction,
  yScale: Fraction,
  visible: boolean,
};
export const TimeDiff = styled.span<TimeDiffProps>`
  color: white;
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 20px;

  text-align: end;

  font-feature-settings: 'tnum' 1;
  transform-origin: top right;
  transform: scale(${({ xScale, yScale }) => `${xScale}, ${yScale}`});

  opacity: ${({ visible }) => visible ? 1 : 0};
  ${({ transitionProps }) => commonTransition(transitionProps)}
`;
TimeDiff.displayName = "TimeDiff";

export const FastestLapGem = styled.div`
  position: absolute;

  height: ${p => p.theme.design.timingTower.rowHeightPx}px;
  width: ${p => p.theme.design.timingTower.rowHeightPx - 2}px;

  left: ${p => -p.theme.design.timingTower.rowHeightPx + 2}px;
  top: 0;

  background-color: ${p => p.theme.colors.laps.purple};
  background-image: url(${fastestLapIcon});
  background-repeat: no-repeat;
  background-size: 89%;
  background-position: center 40%;
`;
FastestLapGem.displayName = "FastestLapGem";
