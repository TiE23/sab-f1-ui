import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { setAnimatedBG, setDarkBG } from "../../../features/workspace/workspaceSlice";

import { Toggle } from "../../Common/Inputs/Toggle";
import { OverlayControl } from "../../OverlayTool";

export const WorkspaceControls = () => {
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
      </InlineCluster>
      <OverlayControl />
    </Split>
  );
};
