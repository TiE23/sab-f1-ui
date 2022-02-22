import styled, { css } from "styled-components";
import { TeamFlagStyle } from "../../../../domain/data/teams";
import { Px } from "../../../../types/style";

type ContainerProps = {
  height: Px,
  width: Px,
};
export const Container = styled.div<ContainerProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 10%,
    black 40%,
    black 60%,
    transparent 90%,
    transparent 100%
  );
`;
Container.displayName = "Container";

type FlagContainerProps = {
  height: Px,
  width: Px,
  collapsedWidth: Px,
  topFlag?: boolean,
  masked?: boolean,
  teamFlag?: boolean,
};
export const FlagContainer = styled.div<FlagContainerProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  ${({ masked = false }) => masked && css`
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 15%,
      black 70%,
      transparent 95%
    );
  `}

  ${({ width, collapsedWidth, topFlag = false, teamFlag = false }) => topFlag
    ? css`
      clip-path: polygon(
        ${((collapsedWidth * (teamFlag ? .415 : .5)) / width) * 100}% 0,
        ${teamFlag ? 87.7 : 95}% 0,
        ${((1 - ((collapsedWidth * .55) / width)) * 100)}% 100%,
        0 100%
      );
    `
    : css`
      clip-path: polygon(
        ${((collapsedWidth * (teamFlag ? .415 : .5)) / width) * 100}% 0,
        ${teamFlag ? 90 : 95}% 0,
        ${teamFlag ? 90 : 95}% 40%,
        ${((1 - ((collapsedWidth * .34) / width)) * 100)}% 100%,
        0 100%
      );
    `}
`;
FlagContainer.displayName = "FlagContainer";

type FlagDivBaseProps = {
  src: string,
  height: Px,
  width: Px,
};
const FlagDivBase = styled.div<FlagDivBaseProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-color: white;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
`;

type CountryFlagDivProps = {
  xOffset?: Px,
};
export const CountryFlagDiv = styled(FlagDivBase)<CountryFlagDivProps>`
  background-size: ${({ width, height }) => `${width}px ${height}px`};
  ${({ xOffset }) => xOffset == null
    ? css`background-position: center;`
    : css`background-position-x: ${xOffset}px`}
`;
CountryFlagDiv.displayName = "CountryFlagDiv";

type TeamFlagDivProps = {
  style: TeamFlagStyle,
  bottomFlag?: boolean,
};
export const TeamFlagDiv = styled(FlagDivBase)<TeamFlagDivProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  background-image: url(${({ src }) => src});
  ${({ style: { backgroundColor } }) => css`background-color: ${backgroundColor};`}

  ${({
    bottomFlag,
    height,
    width,
    style: {
      imageSize,
      imagePos: { x, y },
      subFlagModifier: { x: subX, y: subY, scale: subScale },
    },
  }) => bottomFlag
    ? css`
      background-size: ${imageSize * subScale}%;
      background-position:
      ${`${width * (x === 0 ? .1 : x) * subX}px
        ${height * (y === 0 ? .1 : y) * subY}px`};
    `
    : css`
      background-size: ${imageSize}%;
      background-position:
      ${`${width * x}px ${height * y}px`};
    `}
`;

type SlashProps = {
  x?: Px,
  height: Px,
  girth: Px,
};
export const Sheen = styled.div<SlashProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ girth }) => `${girth}px`};

  background: linear-gradient(
    25deg,
    black 0%,
    black 25%,
    rgba(255, 255, 255, 0.15) 45%,
    rgba(255, 255, 255, 0.15) 55%,
    black 75%,
    black 100%
  );
  font-size: ${({ height }) => `${height}px`};  // Hack to let me use em.

  box-shadow:
    0.02em 0 0.005em 0.015em rgba(0, 0, 0, 0.2),
    1em 0 0 1em rgba(0, 0, 0, 0.5);
  transform: skew(-45deg, 0deg) translateX(${({ x = 0 }) => `${x}px`});

  border-left: 0.015em solid rgba(255, 255, 255, 0.1);
`;
Sheen.displayName = "Sheen";

export const Slant = styled.div<SlashProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ girth }) => `${girth}px`};

  background: #1a1a28;
  transform: skewX(-45deg) translateX(${({ x = 0 }) => `${x}px`});
`;
Slant.displayName = "Slant";

export const FlagEdge = styled.div<SlashProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ girth }) => `${girth}px`};

  background: ${p => p.theme.colors.lightGrey};
  opacity: 0.5;
  transform: skewX(-45deg) translateX(${({ x = 0 }) => `${x}px`});

  mask-image: linear-gradient(
    to top,
    transparent 0%,
    transparent 10%,
    black 100%
  );
`;
FlagEdge.displayName = "FlagEdge";
