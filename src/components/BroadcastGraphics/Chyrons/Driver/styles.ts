import styled from "styled-components";
import { Px } from "../../../../types/style";

type BaseContainerProps = {
  width: Px,
  height: Px,
};
export const BaseContainer = styled.div<BaseContainerProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
BaseContainer.displayName = "BaseContainer";

export const BaseBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  border-bottom-right-radius: 11px;
  background-color: #000;

  overflow: hidden;
`;
BaseBackground.displayName = "BaseBackground";

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

type FlagContainerProps = {
  height: Px,
  width: Px,
  right: Px,
};
export const FlagContainer = styled.div<FlagContainerProps>`
  position: absolute;
  right: ${({ right }) => `${right}px`};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  overflow: hidden;
`;
FlagContainer.displayName = "FlagContainer";

type PortraitDivProps = {
  src: string,
  height: Px,
  rightMargin: Px,
};
export const PortraitDiv = styled.div<PortraitDivProps>`
  position: absolute;

  height: ${({ height }) => `${height}px`};
  width: ${({ height }) => `${height * 1.4}px`};

  bottom: 0;
  right: ${({ rightMargin }) => `${rightMargin}px`};

  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center ${({ height }) => `${height * .18}px`};
`;
PortraitDiv.displayName = "PortraitDiv";
