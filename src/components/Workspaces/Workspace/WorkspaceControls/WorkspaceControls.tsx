import { Grid } from "@bedrock-layout/grid";
import { PadBox } from "@bedrock-layout/padbox";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { setAnimatedBG } from "../../../../features/workspace/workspaceSlice";

import { Toggle } from "../../../Common/Inputs/Toggle";
import { OverlayControl } from "../../../OverlayTool";

export const WorkspaceControls = () => {
  const dispatch = useDispatch();
  const { animatedBG } = useSelector(workspaceSelector);

  return(
    <Grid gutter="sm" minItemWidth="100px">
      <PadBox padding="sm">
        <Toggle
          label="Animate BG"
          toggled={animatedBG}
          onToggle={(value: boolean) => {
            dispatch(setAnimatedBG(value));
          }} />
      </PadBox>
      <OverlayControl />
    </Grid>
  );
};
