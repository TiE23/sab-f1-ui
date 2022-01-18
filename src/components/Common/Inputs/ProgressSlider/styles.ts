import styled from "styled-components";

export const ProgressSliderBody = styled.div`
  position: relative;
  height: 1.5em;
  width: auto;

  border-radius: 0.6em;
  background-color: white;
  box-shadow: inset 0 0 50px -50px ${p => p.theme.colors.darkGrey};
  border: 1px solid ${p => p.theme.colors.darkGrey};

  cursor: pointer;

  overflow: hidden;
`;

type ProgressSliderBarProps = {
  bodyWidth: number,
  color?: string,
};
export const ProgressSliderBar = styled.div<ProgressSliderBarProps>`
  position: absolute;
  left: ${({ bodyWidth }) => `${-bodyWidth}px`};
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => (color ?? (p => p.theme.colors.activeGreen))};
`;
ProgressSliderBar.displayName = "ProgressSliderBar";

export const ProgressSliderBarHandle = styled.div`
  position: relative;
  float: right;

  width: 0.8ch;
  right: 0.5ch;

  height: 70%;
  top: 15%;

  border-radius: 2px;

  opacity: 0.5;
  background-color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
ProgressSliderBarHandle.displayName = "ProgressSliderBarHandle";
