import styled, { css } from "styled-components";

import { BGStatusIndicatorModes } from "../../../../types/state";

type StatusIndicatorBaseProps = {
  mode: BGStatusIndicatorModes,
};
export const StatusIndicatorBase = styled.div<StatusIndicatorBaseProps>`
  background-color: black;
  border-top-right-radius: ${p => p.theme.design.statusIndicator.roundedCornerRadiusPx}px;
  height: ${p => p.theme.design.statusIndicator.heightNormalPx}px;
  width: ${({ theme: { design: { timingTower } }, mode }) => {
    if (mode === BGStatusIndicatorModes.LapNarrow) {
      return timingTower.rowLeftHalfWidthPx;
    }
    if (mode === BGStatusIndicatorModes.LapWide) {
      return timingTower.rowLeftHalfWidthPx + timingTower.rowRightHalfWidthPx;
    }
    return 10;
  }}px;
`;
StatusIndicatorBase.displayName = "StatusIndicatorBase";
