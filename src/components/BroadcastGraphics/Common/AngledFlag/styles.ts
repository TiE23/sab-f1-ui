import styled from "styled-components";
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

type NationalFlagProps = {
  height: Px,
};
export const NationalFlag = styled.img<NationalFlagProps>`
  max-inline-size: unset;
  height: ${({ height }) => `${height}px`};
  clip-path: polygon(50% 0, 100% 0, 100% 30%, 66% 100%, 0 100%, 0 100%);
  mask-image: linear-gradient(
    60deg,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
`;
NationalFlag.displayName = "NationalFlag";

type SlashProps = {
  x: Px,
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
  transform: skew(-45deg, 0deg) translateX(${({ x }) => `${x}px`});

  border-left: 0.015em solid rgba(255, 255, 255, 0.25);
`;
Sheen.displayName = "Sheen";

export const Slant = styled.div<SlashProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ girth }) => `${girth}px`};

  background: #1a1a28;
  transform: skewX(-45deg) translateX(${({ x }) => `${x}px`});
`;
Slant.displayName = "Slant";

export const NationalFlagEdge = styled.div<SlashProps>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  width: ${({ girth }) => `${girth}px`};

  background: ${p => p.theme.colors.lightGrey};
  opacity: 0.5;
  transform: skewX(-45deg) translateX(${({ x }) => `${x}px`});

  mask-image: linear-gradient(
    to top,
    transparent 0%,
    transparent 10%,
    black 100%
  );
`;
