import styled, { css } from "styled-components";

type ToggleContainerProps = {
  fontSize?: string;
}
export const ToggleContainer = styled.div<ToggleContainerProps>`
  text-align: center;
  font-size: ${({ fontSize = "inherit" }) => fontSize};
`;
ToggleContainer.displayName = "ToggleContainer";

export const ToggleBody = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
  top: 0.5em;
`;
ToggleBody.displayName = "ToggleBody";

export const ToggleInput = styled.input`
  display: none;
`;
ToggleInput.displayName = "ToggleInput";

export const ToggleLabel = styled.label`
  display: block;
  overflow: hidden;
  border-radius: .75em;
  height: 1.5em;
  width: 2.7em;
  cursor: pointer;
`;
ToggleLabel.displayName = "ToggleLabel";

type ToggleBackgroundProps = {
  toggled: boolean,
  toggledColor?: string,
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

  ${({ toggled }) => toggled && css`
    box-shadow: inset 0 0 24px -16px black;
  `}
`;
ToggleBackground.displayName = "ToggleBackground";

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
ToggleCircle.displayName = "ToggleCircle";

