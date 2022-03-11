import styled from "styled-components";
import { BGStatusIndicatorModes } from "../../../../types/state";

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


export const StatusIndicatorLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
StatusIndicatorLayout.displayName = "StatusIndicatorLayout";

type IndicatorModeProps = {
  mode: BGStatusIndicatorModes,
};


////// Lap Indicator Mode Styles //////
type LapLineProps = DirectionalTransitionProps & IndicatorModeProps;
export const LapLine = styled.div<LapLineProps>`
  position: absolute;
  top: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 33 : mode === BGStatusIndicatorModes.LapWide ? 5 : 0}px;
  left: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 30 : mode === BGStatusIndicatorModes.LapWide ? 128 : 0}px;

  opacity: ${({ open }) => open ? 1 : 0};

  width: ${({ mode, open }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? (90 * (open ? 1 : 0.3)) : mode === BGStatusIndicatorModes.LapWide ? 3 : 0}px;
  height: ${({ mode, open }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 3 : mode === BGStatusIndicatorModes.LapWide ? (60 * (open ? 1 : 0.3)) : 0}px;

  background-color: ${p => p.theme.colors.textWhite};
  border: 1px solid ${p => p.theme.colors.dimGrey};
  mask-image: linear-gradient(
    to ${({ mode }) => mode === BGStatusIndicatorModes.LapNarrow ? "left" : "bottom"},
    transparent 0,
    #000000cc 40%,
    #000000cc 50%,
    #000000cc 60%,
    transparent 100%
  );

  ${({ open, transitionOpeningProps, transitionClosingProps, transitionProps }) =>
    commonDirectionalTransition(open, transitionOpeningProps, transitionClosingProps, transitionProps)}
`;
LapLine.displayName = "LapLine";


type LapLabelProps = DirectionalTransitionProps & IndicatorModeProps;
export const LapLabel = styled.span<LapLabelProps>`
  position: absolute;
  top: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 6 : mode === BGStatusIndicatorModes.LapWide ? 22 : 0}px;
  left: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 33 : mode === BGStatusIndicatorModes.LapWide ? 25 : 0}px;

  font-family: ${p => p.theme.fonts.f1Wide};
  font-size: ${p => p.theme.fontSizes.indicatorLapLabel};
  color: ${p => p.theme.colors.textWhite};

  ${({ open, transitionOpeningProps, transitionClosingProps, transitionProps }) =>
    commonDirectionalTransition(open, transitionOpeningProps, transitionClosingProps, transitionProps)}
`;
LapLabel.displayName = "LapLabel";


type LapCountProps = DirectionalTransitionProps & IndicatorModeProps;
export const LapCount = styled.div<LapCountProps>`
  position: absolute;
  top: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 41 : mode === BGStatusIndicatorModes.LapWide ? 24 : 0}px;
  left: ${({ mode }) =>
    mode === BGStatusIndicatorModes.LapNarrow
      ? 72 : mode === BGStatusIndicatorModes.LapWide ? 185 : 0}px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 0;
  height: ${p => p.theme.fontSizes.indicatorLapCount};
  overflow-y: clip;

  > span {
    font-family: ${p => p.theme.fonts.f1Regular};
    font-size: ${p => p.theme.fontSizes.indicatorLapCount};
    color: ${p => p.theme.colors.textWhite};

    font-feature-settings: 'tnum' 1;
    white-space: nowrap;
  }

  ${({ open, transitionOpeningProps, transitionClosingProps, transitionProps }) =>
    commonDirectionalTransition(open, transitionOpeningProps, transitionClosingProps, transitionProps)}
`;
LapCount.displayName = "LapCount";
