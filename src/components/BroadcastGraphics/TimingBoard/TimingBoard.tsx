import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { theme } from "../../../shared/theme";

import { TimingBoardLayout } from "./styles";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { TimingTower } from "./TimingTower";

export function TimingBoard() {
  const { debugDurationMultiplier } = useSelector(workspaceSelector);
  return (
    <TimingBoardLayout>
      <MockupBlock
        height="73px"
        width={`${theme.design.timingTower.rowLeftHalfWidthPx}px`}
        color="black"
      />
      <TimingTower
        debugDurationMultiplier={debugDurationMultiplier}
      />
    </TimingBoardLayout>
  );
}
