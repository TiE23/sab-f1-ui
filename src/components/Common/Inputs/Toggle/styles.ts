import styled, { css } from "styled-components/macro";

type ToggleContainerProps = {
  fontSize?: string;
}
export const ToggleContainer = styled.div<ToggleContainerProps>`
  display: flex;
  align-items: flex-end;
  font-size: ${({ fontSize = "inherit" }) => fontSize};
`;

export const ToggleBody = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleLabelText = styled.span`
  margin-right: 1ch;
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: ${p => p.theme.fontSizes.label};
`;

export const ToggleLabel = styled.label`
  display: block;
  overflow: hidden;
  border-radius: .75em;
  height: 1.5em;
  width: 2.7em;
  cursor: pointer;
`;

type ToggleBackgroundProps = {
  toggled: boolean,
  toggledColor?: string,
  showIndicators?: boolean,
};
export const ToggleBackground = styled.div<ToggleBackgroundProps>`
  background-color: ${({
    toggledColor,
    toggled,
  }) => (
    toggled ?
      (toggledColor ?? (p => p.theme.colors.activeGreen)) :
      p => p.theme.colors.lightGrey
  )};
  width: 100%;
  height: 100%;
  transition: background-color 300ms;

  ${({ toggled }) => toggled && css`
    box-shadow: inset 0 0 24px -16px black;
  `}

  ${({ toggled, showIndicators }) => showIndicators && (toggled ?
    css`
      div:before {
        position: absolute;
        right: 26px;
        bottom: -2px;
        content: "I";
        color: ${p => p.theme.colors.darkGrey};
      }
    ` :
    css`
      div:after {
        position: absolute;
        left: 23px;
        bottom: -2px;
        content: "O";
        color: ${p => p.theme.colors.grey};
      }
    `)}
`;

type ToggleCircleProps = {
  toggled: boolean,
  stretched: boolean,
};
export const ToggleCircle = styled.div<ToggleCircleProps>`
  position: absolute;
  height: 1.3em;
  width: ${({ stretched }) => stretched ? "1.6em": "1.3em"};
  border-radius: 0.65em;
  margin: 0.1em;
  background-color: white;
  top: 0;
  ${({ toggled }) => toggled ? css`right: 0;` : css`left: 0;`}
`;
