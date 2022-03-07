import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";

import { TimingBoardLayout } from "./styles";
import { TimingTower } from "./TimingTower";
import { StatusIndicator } from "./StatusIndicator";

type TimingBoardProps = {
  debug?: boolean,
};
export function TimingBoard({ debug = false }: TimingBoardProps) {
  const { debugDurationMultiplier } = useSelector(workspaceSelector);
  return (
    <TimingBoardLayout>
      <StatusIndicator
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
      <TimingTower
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
    </TimingBoardLayout>
  );
}
