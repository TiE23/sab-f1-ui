import styled from "styled-components";
import { Px } from "../../../../types/style";

type VenetianBlindsFilterProps = {
  deg: number,
  transparentWidth: Px,
  opaqueWidth: Px,
  opaqueColor: string,
};
export const VenetianBlindsFilter = styled.div<VenetianBlindsFilterProps>`
  mask-image: repeating-linear-gradient(
    ${({ deg }) => deg}deg,
    black,
    black ${({ opaqueWidth }) => opaqueWidth}px,
    transparent ${({ opaqueWidth }) => opaqueWidth}px,
    transparent ${({ transparentWidth, opaqueWidth }) => transparentWidth + opaqueWidth}px
  );

  > * {
    box-shadow: inset 0 0 0 99999px ${({ opaqueColor }) => opaqueColor};
  }
`;
VenetianBlindsFilter.displayName = "VenetianBlindsFilter";
