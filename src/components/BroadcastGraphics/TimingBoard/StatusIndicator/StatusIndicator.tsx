import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { theme } from "../../../../shared/theme";
import { BGStatusIndicatorModes } from "../../../../types/state";
import { DebugDurationProps } from "../../../../types/style";

import { StatusIndicatorBase } from "./styles";

type StatusIndicatorProps = DebugDurationProps;

export function StatusIndicator({
  debugDurationMultiplier: DDM = 1.0,
}: StatusIndicatorProps) {
  const { design: { timingTower: ttTheme } } = theme;

  const { timingBoard: { statusIndicator: { mode } } } =
    useSelector(broadcastGraphicsSelector);

  return (
    <StatusIndicatorBase
      open={mode !== BGStatusIndicatorModes.LapNarrow}
      transitionOpeningProps={[{
        property: "width",
        duration: ttTheme.fullWidthDurationMs * DDM,
      }]}
      transitionClosingProps={[{
        property: "width",
        duration: ttTheme.fullWidthDurationMs * DDM,
        delay: ttTheme.fullWidthCloseDelayMs * DDM,
      }]}
    />
  );
}
