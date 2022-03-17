import styled from "styled-components/macro";

import { TransitionProps } from "../../../../types/style";
import { commonTransition } from "../../../../utils/styling";

export const GemContainer = styled.div<TransitionProps>`
  position: absolute;
  top: ${p =>
    -p.theme.design.rolexGem.heightPx - p.theme.design.rolexGem.bottomMarginPx}px;

  opacity: ${({ open }) => open ? 1 : 0};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

export const GemBackground = styled.div`
  position: relative;
  height: ${p => p.theme.design.rolexGem.heightPx}px;
  width: ${p => p.theme.design.rolexGem.widthPx}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.logos.rolexGemGreen};
  border-radius: ${p => p.theme.design.rolexGem.borderRadiusPx}px;
`;

export const LogoImage = styled.img<TransitionProps>`
  height: ${({ theme: { design: { rolexGem } }, open }) =>
    rolexGem.logoHeightPx * (open ? 1 : rolexGem.logoHeightFadeStartFraction)}px;
  margin-top: ${p => p.theme.design.rolexGem.logoTopMarginPx}px;
  opacity: ${({ theme: { design: { rolexGem } }, open }) => open
    ? 1 : rolexGem.logoOpacityFadeStartFraction};

  ${({ transitionProps }) => commonTransition(transitionProps)}
`;

