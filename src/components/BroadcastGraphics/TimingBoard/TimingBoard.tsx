import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { Placement } from "../../../types/style";

import { TimingBoardLayout } from "./styles";
import { TimingTower } from "./TimingTower";
import { StatusIndicator } from "./StatusIndicator";

type TimingBoardProps = {
  debug?: boolean,
  placement?: Placement,
};
export function TimingBoard({ debug = false, placement = {} }: TimingBoardProps) {
  const { debugDurationMultiplier } = useSelector(workspaceSelector);

  return (
    <TimingBoardLayout placement={placement}>
      <StatusIndicator
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
      <TimingTower
        debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
      />
    </TimingBoardLayout>
  );
}
