import styled from "styled-components";
import { Px } from "../../../../types/style";

type PositionFlagBoxProps = {
  size: Px,
  color: string,
};
export const PositionFlagBox = styled.div<PositionFlagBoxProps>`
  position: relative;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};

  border-bottom-right-radius: 15%;
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
`;
PositionFlagBox.displayName = "PositionFlagBox";

type PositionNumberProps = {
  size: Px,
  color: string,
};
export const PositionNumber = styled.span<PositionNumberProps>`
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  margin-top: 2px;
`;
PositionNumber.displayName = "PositionNumber";
