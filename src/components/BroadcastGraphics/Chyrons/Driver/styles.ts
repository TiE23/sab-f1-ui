import styled from "styled-components";

type BaseBackgroundProps = {
  width: number, // px
  height: number, // px
};
export const BaseBackground = styled.div<BaseBackgroundProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  display: flex;
  align-items: center;

  border-bottom-right-radius: 11px;
  background-color: #000;

  overflow: hidden;
`;
BaseBackground.displayName = "BaseBackground";

type PositionFlagProps = {
  containerHeight: number,  // px
};
export const PositionFlag = styled.div<PositionFlagProps>`
  position: relative;
  height: ${({ containerHeight }) => `${containerHeight * 0.85}px`};
  width: ${({ containerHeight }) => `${containerHeight * 0.85}px`};

  border-bottom-right-radius: 9px;
  background-color: #f4f3ee;

  display: flex;
  align-items: center;
  justify-content: center;
`;
PositionFlag.displayName = "PositionFlag";

type PositionNumberProps = {
  containerHeight: number,  // px
};
export const PositionNumber = styled.span<PositionNumberProps>`
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: ${({ containerHeight }) => `${containerHeight * 0.85 * 0.64}px`};
  margin-top: 2px;
`;
PositionNumber.displayName = "PositionNumber";

type TeamColorBarProps = {
  color: string,
};
export const TeamColorBar = styled.div<TeamColorBarProps>`
  position: relative;
  width: 1%;  // 6px;
  height: 63%;

  background-color: ${({ color }) => color};
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

export const TeamName = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #d1d1d1;
  font-size: 20px;
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
