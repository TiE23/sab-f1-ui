import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { updateWorkspace } from "../../../features/workspace/workspaceSlice";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { newWorkspace } from "../../../features/overlayTool/overlayToolSlice";

import { Px } from "../../../types/style";
import { workspaces } from "../../../domain/data/workspaces";
import { WorkspaceId } from "../../../types/state";

import { PreviewWindow, H2, ControlsContainer } from "./styles";
import { WorkspaceControls } from "../WorkspaceControls";
import { OverlayDisplay } from "../../OverlayTool";

type WorkspaceProps = {
  workspaceId: WorkspaceId,
  previewContent: ReactNode,
  prototypeControls: ReactNode,
  showAnimationSpeedSelector?: boolean,
  bleedover?: Px,
};
export const Workspace = ({
  workspaceId,
  previewContent,
  prototypeControls,
  showAnimationSpeedSelector = false,
  bleedover,
}: WorkspaceProps) => {
  const dispatch = useDispatch();
  const { animatedBG, darkBG, workspaceProperties } = useSelector(workspaceSelector);
  const { currentWorkspaceId: overlayWorkspaceId } = useSelector(overlayToolSelector);

  useEffect(() => {
    // Update workspace store for ID.
    dispatch(updateWorkspace({
      workspaceId,
      workspaceProperties: workspaces[workspaceId],
    }));

    // Switching Workspace means we need to init a newWorkspace for Overlay tool.
    if (overlayWorkspaceId !== workspaceId) {
      dispatch(newWorkspace({
        overlayIds: workspaces[workspaceId].overlayIds,
        workspaceId: workspaceId,
      }));
    }
  }, [workspaceId]);

  return (
    <Stack
      gutter="lg"
      as={Center}
      maxWidth="80%"
      centerChildren
    >
      <H2>{workspaceId ? workspaceProperties.name : "Unknown"}</H2>
      <PreviewWindow
        dimensions={workspaceProperties.previewWindowDimensions}
        animatedBG={animatedBG}
        darkBG={darkBG}
      >
        {previewContent}
        <OverlayDisplay
          containerDimensions={workspaceProperties.previewWindowDimensions}
          bleedover={bleedover}
        />
      </PreviewWindow>
      <ControlsContainer>
        <WorkspaceControls
          showAnimationSpeedSelector={showAnimationSpeedSelector}
        />
        {prototypeControls}
      </ControlsContainer>
    </Stack>
  );
};
