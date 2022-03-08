import styled from "styled-components";

import { DirectionalTransitionProps } from "../../../../types/style";
import { commonDirectionalTransition } from "../../../../utils/styling";

export const StatusIndicatorBase = styled.div<DirectionalTransitionProps>`
  background-color: black;
  border-top-right-radius: ${p => p.theme.design.statusIndicator.roundedCornerRadiusPx}px;
  height: ${p => p.theme.design.statusIndicator.heightNormalPx}px;
  width: ${({ theme: { design: { timingTower: ttTheme } }, open }) => open
    ? ttTheme.rowLeftHalfWidthPx + ttTheme.rowRightHalfWidthPx
    : ttTheme.rowLeftHalfWidthPx}px;

  ${({ open, transitionOpeningProps, transitionClosingProps, transitionProps }) =>
    commonDirectionalTransition(open, transitionOpeningProps, transitionClosingProps, transitionProps)}
`;
StatusIndicatorBase.displayName = "StatusIndicatorBase";
