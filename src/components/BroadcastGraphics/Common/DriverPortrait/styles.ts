import styled from "styled-components/macro";

import { Percent, Px } from "../../../../types/style";

type PortraitDivProps = {
  src: string,
  height: Px,
  verticalOffsetPercentage: Percent,
};
export const PortraitDiv = styled.div<PortraitDivProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ height }) => `${height * 1.4}px`};

  --image: url(${({ src }) => src});
  --position: center ${({ height, verticalOffsetPercentage }) =>
    `${height * (verticalOffsetPercentage / 100)}px`};

  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: var(--position);

  /* Redundant masking to allow special filters to work. */
  mask-image: var(--image);
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: var(--position);
`;
