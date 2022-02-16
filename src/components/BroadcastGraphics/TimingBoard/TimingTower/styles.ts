import styled, { css } from "styled-components";

export const RowsContainer = styled.div`
display: flex;
flex-direction: column;

flex-wrap: nowrap;

justify-content: flex-start;
align-items: stretch;
`;


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
  height: 36px; // Future will be animated.

  ${({ topGap }) => topGap && css`margin-top: 3px;`}
  ${({ bottomGap }) => bottomGap && css`margin-bottom: 3px;`}
  ${({ retired }) => retired && css`opacity: 0.4;`}
`;

type RoundedProp = {
  roundedCorner?: boolean;
};
const Rounded = styled.div<RoundedProp>`
  ${({ roundedCorner }) => roundedCorner && css`border-bottom-right-radius: 5px;`}
`;

export const RowLeftHalf = styled(Rounded)`
  position: absolute;
  left: 0;
  top: 0;

  width: 147px; // Future will be animated.
  height: 36px;

  background-color: #000000cb
`;

export const RowLeftHalfLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-start;
`;

export const RowRightHalf = styled(Rounded)`
  position: absolute;
  right: 0;
  top: 0;

  width: 108px; // Future will be animated.
  height: 36px;

  overflow-x: hidden;

  background-color: #0000007e
`;

export const RowRightHalfLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-end;
`;

export const DriverName = styled.span`
  color: white;
  font-family: ${p => p.theme.fonts.f1Bold};
  font-size: 20px;
`;
