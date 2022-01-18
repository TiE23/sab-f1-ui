import { animated } from "@react-spring/web";
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
export const ProgressSliderBar = styled(animated.div)<ProgressSliderBarProps>`
  position: absolute;
  left: ${({ bodyWidth }) => `${-bodyWidth}px`};
  /* left: -359px; */
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => (color ?? (p => p.theme.colors.activeGreen))};
`;
ProgressSliderBar.displayName = "ProgressSliderBar";


export const ProgressSliderBarHandleContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
ProgressSliderBarHandleContainer.displayName = "ProgressSliderBarHandleContainer";

export const ProgressSliderBarHandle = styled.div`
  position: relative;
  width: 1ch;
  height: 1.2em;
  background-color: black;
  margin-top: 1px;
  border-radius: 3px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
ProgressSliderBarHandle.displayName = "ProgressSliderBarHandle";
