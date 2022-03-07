import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { DebugDurationProps } from "../../../../types/style";

import { StatusIndicatorBase } from "./styles";

type StatusIndicatorProps = DebugDurationProps;

export function StatusIndicator({
  debugDurationMultiplier: DDM = 1.0,
}: StatusIndicatorProps) {
  const { timingBoard: { statusIndicator: { mode } } } =
    useSelector(broadcastGraphicsSelector);

  return (
    <StatusIndicatorBase
      mode={mode}
    />
  );
}
