import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { eventSelector } from "../../../../features/event/eventSelector";
import { theme } from "../../../../shared/theme";
import { BGStatusIndicatorModes } from "../../../../types/state";
import { DebugDurationProps, TransitionArgs } from "../../../../types/style";
import { orMatch } from "../../../../utils/common";

import { LapCount, LapLabel, LapLine, StatusIndicatorBase, StatusIndicatorLayout } from "./styles";

type StatusIndicatorProps = DebugDurationProps;



export function StatusIndicator({
  debugDurationMultiplier: DDM = 1.0,
}: StatusIndicatorProps) {
  const { design: { timingTower: ttTheme } } = theme;

  const { timingBoard: { statusIndicator: { mode } } } =
    useSelector(broadcastGraphicsSelector);
  const { eventProgress: { scheduledLaps, lapCount } } = useSelector(eventSelector);

  const toWideTransition: TransitionArgs[] = [{
    property: "all",
    duration: ttTheme.fullWidthDurationMs * DDM,
  }];
  const toNarrowTransition: TransitionArgs[] = [{
    property: "all",
    duration: ttTheme.fullWidthDurationMs * DDM,
    delay: ttTheme.fullWidthCloseDelayMs * DDM,
  }];

  return (
    <StatusIndicatorBase
      open={mode !== BGStatusIndicatorModes.LapNarrow}
      transitionOpeningProps={toWideTransition}
      transitionClosingProps={toNarrowTransition}
    >
      <StatusIndicatorLayout>
        {orMatch(mode, BGStatusIndicatorModes.LapNarrow, BGStatusIndicatorModes.LapWide) && (
          <>
            <LapLine
              mode={BGStatusIndicatorModes.LapNarrow}
              open={mode === BGStatusIndicatorModes.LapNarrow}
              transitionOpeningProps={toNarrowTransition}
              transitionClosingProps={toWideTransition}
            />
            <LapLine
              mode={BGStatusIndicatorModes.LapWide}
              open={mode === BGStatusIndicatorModes.LapWide}
              transitionOpeningProps={toWideTransition}
              transitionClosingProps={toNarrowTransition}
            />
            <LapLabel
              mode={mode}
              open={mode === BGStatusIndicatorModes.LapWide}
              transitionOpeningProps={toWideTransition}
              transitionClosingProps={toNarrowTransition}
            >LAP</LapLabel>
            <LapCount
              mode={mode}
              open={mode === BGStatusIndicatorModes.LapWide}
              transitionOpeningProps={toWideTransition}
              transitionClosingProps={toNarrowTransition}
            >
              <span>{lapCount}&thinsp;/&thinsp;{scheduledLaps}</span>
            </LapCount>
          </>
        )}
      </StatusIndicatorLayout>
    </StatusIndicatorBase>
  );
}
