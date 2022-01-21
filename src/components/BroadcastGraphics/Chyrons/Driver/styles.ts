import styled from "styled-components";

export const BaseBackground = styled.div`
  position: relative;
  width: 582px;
  height: 72px;

  border-bottom-right-radius: 11px;
  background-color: #000;
`;
BaseBackground.displayName = "BaseBackground";

export const NumberFlag = styled.div`
  position: absolute;
  width: 61px;
  height: 61px;
  top: 6px;
  left: 6px;

  border-bottom-right-radius: 9px;
  background-color: #f4f3ee;

  display: flex;
  align-items: center;
  justify-content: center;
`;
NumberFlag.displayName = "NumberFlag";

export const FlagNumber = styled.span`
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 39px;
  margin-top: 2px;
`;
FlagNumber.displayName = "FlagNumber";

type TeamColorBarProps = {
  color: string,
};
export const TeamColorBar = styled.div<TeamColorBarProps>`
  position: absolute;
  width: 6px;
  height: 45px;
  top: 14px;
  left: 75px;

  background-color: ${({ color }) => color};
`;
TeamColorBar.displayName = "TeamColorBar";

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 90px;
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

export const TeamName = styled.span`
  position: absolute;
  font-family: ${p => p.theme.fonts.f1Regular};
  color: #d1d1d1;
  font-size: 20px;
  bottom: 6px;
`;
TeamName.displayName = "TeamName";
