import { theme } from "../../../shared/theme";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { TimingBoardLayout } from "./styles";
import { TimingTower } from "./TimingTower";

export function TimingBoard() {
  return (
    <TimingBoardLayout>
      <MockupBlock
        height="73px"
        width={`${theme.design.timingTower.rowLeftHalfWidthPx}px`}
        color="black"
      />
      <TimingTower />
    </TimingBoardLayout>
  );
}
