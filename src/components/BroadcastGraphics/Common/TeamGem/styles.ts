import styled from "styled-components/macro";
import { TeamGemStyle } from "../../../../domain/data/teams";
import { Px } from "../../../../types/style";


const GEM_WIDTH_RATIO = 1.21;

type GemContainerProps = {
  height: Px,
};
export const GemContainer = styled.div<GemContainerProps>`
  position: relative;
  height: ${({ height }) => height}px;
  width: ${({ height }) => height * GEM_WIDTH_RATIO}px;

  overflow: hidden;
  background-color: black;
  border-bottom-right-radius: 3px;

  mask-image: linear-gradient(to left, black 0%, black 80%, transparent 100%);
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%, 0 50%);
`;

type GemColorDivProps = {
  height: Px,
  gemStyle: TeamGemStyle,
};
export const GemColorDiv = styled.div<GemColorDivProps>`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: radial-gradient(
    circle at 120% 160%,
    ${({ gemStyle: { backgroundColor } }) => backgroundColor} 50%,
    black 100%
  );
  background-size: 100%;
  background-repeat: no-repeat;
`;

type GemLogoDivProps = {
  height: Px,
  gemStyle: TeamGemStyle,
  src: string,
};
export const GemLogoDiv = styled.div<GemLogoDivProps>`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${({ src }) => src});
  background-size: ${({ gemStyle: { imageSize } }) => imageSize}%;
  background-position: ${({ height, gemStyle: { imagePos: { x, y } } }) => (
    `${height * GEM_WIDTH_RATIO * x}px ${height * y}px`
  )};
  background-repeat: no-repeat;
`;
