import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

import bg from "../../../public/images/misc/checker-40x40.png";

export type PreviewWindowProps = {
  height: number,
  width: number,
};
export const PreviewWindow = styled(PadBox).attrs(() => ({
  padding: "lg",
}))<PreviewWindowProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  border-radius: 2em;
  background-image: url("${bg}");
`;

export const H2 = styled.h2`
  margin: 0.2em;
  color: ${p => p.theme.colors.darkGrey};
  font-family: ${p => p.theme.fonts.f1Regular};
  max-inline-size: 600px;
`;
