import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";

import { TimingBoardLayout } from "./styles";
import { TimingTower } from "./TimingTower";
import { StatusIndicator } from "./StatusIndicator";
import { broadcastGraphicsSelector } from "../../../features/broadcast/graphics/broadcastGraphicsSelector";

type TimingBoardProps = {
  debug?: boolean,
};
export function TimingBoard({ debug = false }: TimingBoardProps) {
  const { debugDurationMultiplier } = useSelector(workspaceSelector);
  const { timingBoard } = useSelector(broadcastGraphicsSelector);

  return (
    <TimingBoardLayout placement={timingBoard.placement}>
      <StatusIndicator
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
      <TimingTower
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
    </TimingBoardLayout>
  );
}
