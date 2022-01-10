import { Grid } from "@bedrock-layout/grid";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { setAnimatedBG } from "../../../features/workspace/workspaceSlice";
import { AnimatedBG } from "../../../types/state";

import { Toggle } from "../../Common/Inputs/Toggle";

export const WorkspaceControls = () => {
  const dispatch = useDispatch();
  const { animatedBG } = useSelector(workspaceSelector);

  return(
    <Grid gutter="sm">
      <Toggle
        label="Animate BG"
        toggled={animatedBG}
        onToggle={(value: AnimatedBG) => {
          dispatch(setAnimatedBG(value));
        }} />
    </Grid>
  );
};
