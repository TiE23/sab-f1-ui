import styled, { css, keyframes } from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

import bg from "../../../public/images/misc/checker-40x40.png";
import { Dimensions } from "../../../types/state";

const scrollAnimation = keyframes`
  from { background-position: 0 0; }
  to { background-position: 80px -40px; }
`;

export type PreviewWindowProps = {
  dimensions: Dimensions,
  animatedBG?: boolean,
};
export const PreviewWindow = styled(PadBox).attrs(() => ({
  padding: "lg",
}))<PreviewWindowProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ dimensions }) => dimensions.height}px;
  width: ${({ dimensions }) => dimensions.width}px;

  border-radius: 1em;

  background-image: url("${bg}");
  background-position: 0px 0px;
  background-repeat: repeat;

  ${({ animatedBG }) => animatedBG && css`
    animation: ${scrollAnimation} 5s linear infinite;
  `}
`;
PreviewWindow.displayName = "PreviewWindow";

export const H2 = styled.h2`
  margin: 0.2em;
  color: ${p => p.theme.colors.darkGrey};
  font-family: ${p => p.theme.fonts.f1Regular};
  max-inline-size: 600px;
`;
H2.displayName = "H2";

export const ControlsContainer = styled(PadBox).attrs(() => ({
  padding: "lg",
}))`
  background-color: ${p => p.theme.colors.faintGrey};
  border-radius: 1em;
  width: 800px;
  margin-bottom: 1em;
`;
ControlsContainer.displayName = "ControlsContainer";
