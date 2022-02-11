import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { setAnimatedBG, setDarkBG, setDebugDurationMultiplier } from "../../../features/workspace/workspaceSlice";
import { SlotSelector } from "../../Common/Inputs/SlotSelector";

import { Toggle } from "../../Common/Inputs/Toggle";
import { OverlayControl } from "../../OverlayTool";

const debugMultipliers = ["1", "1.5", "2", "3", "5", "10"];


type WorkspaceControlsProps = {
  showAnimationSpeedSelector?: boolean,
};
export const WorkspaceControls = (
  { showAnimationSpeedSelector = false }: WorkspaceControlsProps,
) => {
  const dispatch = useDispatch();
  const { animatedBG, darkBG } = useSelector(workspaceSelector);

  return(
    <Split gutter="md">
      <InlineCluster as={PadBox} padding="sm" gutter="md">
        <Toggle
          label="Animate BG"
          toggled={animatedBG}
          onToggle={(value: boolean) => {
            dispatch(setAnimatedBG(value));
          }}
        />
        <Toggle
          label="Dark BG"
          toggled={darkBG}
          onToggle={(value: boolean) => {
            dispatch(setDarkBG(value));
          }}
        />
        {showAnimationSpeedSelector && (
          <SlotSelector
            label="Animation Speed"
            items={debugMultipliers}
            formatter={value => `x${value}`}
            onChange={index =>
              dispatch(setDebugDurationMultiplier(parseFloat(debugMultipliers[index])))}
            slotWidth="4ch"
          />
        )}
      </InlineCluster>
      <OverlayControl />
    </Split>
  );
};
