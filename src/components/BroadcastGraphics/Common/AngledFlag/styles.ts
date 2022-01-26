import styled, { css } from "styled-components";
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
};
export const FlagContainer = styled.div<FlagContainerProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  ${({ masked = false }) => masked && css`
    mask-image: linear-gradient(
      60deg,
      transparent 0%,
      black 15%,
      black 85%,
      transparent 100%
    );
  `}

  ${({ width, collapsedWidth, topFlag = false }) => topFlag
    ? css`
      clip-path: polygon(
        ${((collapsedWidth * .5) / width) * 100}% 0,
        95% 0,
        ${((1 - ((collapsedWidth * .55) / width)) * 100)}% 100%,
        0 100%
      );
    `
    : css`
      clip-path: polygon(
        ${((collapsedWidth * .5) / width) * 100}% 0,
        100% 0,
        100% 30%,
        ${((1 - ((collapsedWidth * .34) / width)) * 100)}% 100%,
        0 100%
      );
    `}
`;
FlagContainer.displayName = "FlagContainer";

type CountryFlagDivProps = {
  src: string,
  height: Px,
  width: Px,
  xOffset?: Px,
};
export const CountryFlagDiv = styled.div<CountryFlagDivProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-image: url(${({ src }) => src});
  background-size: ${({ width, height }) => `${width}px ${height}px`};
  background-repeat: no-repeat;
  ${({ xOffset }) => xOffset == null
    ? css`background-position: center;`
    : css`background-position-x: ${xOffset}px`}
`;
CountryFlagDiv.displayName = "CountryFlagDiv";

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

export const CountryFlagEdge = styled.div<SlashProps>`
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
CountryFlagEdge.displayName = "CountryFlagEdge";
