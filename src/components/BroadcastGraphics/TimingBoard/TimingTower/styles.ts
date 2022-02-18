import styled, { css } from "styled-components";

import { Fraction, Px } from "../../../../types/style";

export const RowsContainer = styled.div`
display: flex;
flex-direction: column;

flex-wrap: nowrap;

justify-content: flex-start;
align-items: stretch;
`;
RowsContainer.displayName = "RowsContainer";

type RowContainerProps = {
  topGap?: boolean,
  bottomGap?: boolean,
  retired?: boolean,
  wide?: boolean,
}
// All the elements in a row should go in here.
export const RowContainer = styled.div<RowContainerProps>`
  position: relative;
  width: ${({ wide }) => wide ? 255 : 147}px;
  height: ${p => p.theme.design.timingTower.rowHeightPx}px; // Future will be animated.

  ${({ topGap }) => topGap && css`margin-top: 3px;`}
  ${({ bottomGap }) => bottomGap && css`margin-bottom: 3px;`}
  ${({ retired }) => retired && css`opacity: 0.7;`}
`;
RowContainer.displayName = "RowContainer";

type RoundedProp = {
  roundedCornerTop?: Px,
  roundedCornerBottom?: Px,
};
const Rounded = styled.div<RoundedProp>`
  ${({ roundedCornerTop }) =>
    roundedCornerTop && css`border-top-right-radius: ${roundedCornerTop}px;`}
  ${({ roundedCornerBottom }) =>
    roundedCornerBottom && css`border-bottom-right-radius: ${roundedCornerBottom}px;`}
`;

export const RowLeftHalf = styled(Rounded)`
  position: absolute;
  left: 0;
  top: 0;

  width: 147px; // Future will be animated.
  height: ${p => p.theme.design.timingTower.rowHeightPx}px;

  background-color: #000000e5
`;
RowLeftHalf.displayName = "RowLeftHalf";

export const RowLeftHalfLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  padding-left: 3px;

  align-items: center;
  justify-content: flex-start;
`;
RowLeftHalfLayout.displayName = "RowLeftHalfLayout";

export const RowLeftHalfGemContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 2px;
`;
RowLeftHalfGemContainer.displayName = "RowLeftHalfGemContainer";

export const RowRightHalf = styled(Rounded)`
  position: absolute;
  right: 0;
  top: 0;

  width: 108px; // Future will be animated.
  height: ${p => p.theme.design.timingTower.rowHeightPx}px;

  overflow-x: hidden;

  background-color: #0000007e
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

export const DriverName = styled.span`
  color: white;
  font-family: ${p => p.theme.fonts.f1Bold};
  font-size: 20px;
  margin-left: 14px;
`;
DriverName.displayName = "DriverName";

type TimeDiffProps = {
  xScale: Fraction,
  yScale: Fraction,
};
export const TimeDiff = styled.span<TimeDiffProps>`
  color: white;
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 20px;

  text-align: end;

  font-feature-settings: 'tnum' 1;
  transform-origin: top right;
  transform: scale(${({ xScale, yScale }) => `${xScale}, ${yScale}`});
`;
TimeDiff.displayName = "TimeDiff";

import fastestLapIcon from "../../../../public/images/icons/fastest-lap.svg";
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
