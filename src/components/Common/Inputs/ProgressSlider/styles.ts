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
  disabled: boolean,
  color?: string,
};
export const ProgressSliderBar = styled.div<ProgressSliderBarProps>`
  position: absolute;
  left: ${({ bodyWidth }) => `${-bodyWidth}px`};
  height: 100%;
  width: 100%;
  background-color: ${({ color, disabled }) => (
    disabled ? (p => p.theme.colors.lightGrey) :
      color ?? (p => p.theme.colors.activeGreen)
  )};
  transition: background-color 0.2s ease;
`;
ProgressSliderBar.displayName = "ProgressSliderBar";

export const AnimatedProgressSliderBar = animated(ProgressSliderBar);
AnimatedProgressSliderBar.displayName = "AnimatedProgressSliderBar";

type ProgressSliderBarHandleProps = {
  color?: string,
};
export const ProgressSliderBarHandle = styled.div<ProgressSliderBarHandleProps>`
  position: relative;
  float: right;

  width: 0.8ch;
  right: 0.5ch;

  height: 70%;
  top: 15%;

  border-radius: 2px;

  opacity: 0.5;
  background-color: ${({ color = "white" }) => color};
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
ProgressSliderBarHandle.displayName = "ProgressSliderBarHandle";

type ProgressSliderBarIndicatorProps = {
  left: number,
  disabled: boolean,
  color?: string,
};
export const ProgressSliderBarIndicator = styled.span<ProgressSliderBarIndicatorProps>`
  display: block;
  position: relative;
  float: right;
  left: ${({ left }) => left}ch;

  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 0.9em;
  color: ${({ color, left, disabled }) => (
    left < 0
      ? disabled
        ? (p => p.theme.colors.darkGrey)
        : color ?? "white"
      : (p => p.theme.colors.darkGrey)
  )};

  transition-property: left, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;

  user-select: none;
`;
ProgressSliderBarIndicator.displayName = "ProgressSliderBarIndicator";
