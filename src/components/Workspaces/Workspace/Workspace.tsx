import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { updateWorkspace } from "../../../features/workspace/workspaceSlice";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { newWorkspace } from "../../../features/overlayTool/overlayToolSlice";

import { PreviewWindow, H2, ControlsContainer } from "./styles";
import { WorkspaceControls } from "./WorkspaceControls";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { OverlayDisplay } from "../../OverlayTool";

import { workspaces } from "../workspaces";

export const Workspace = () => {
  const dispatch = useDispatch();
  const { workspaceId } = useParams();
  const { animatedBG, workspaceProperties } = useSelector(workspaceSelector);
  const { currentWorkspaceId: overlayWorkspaceId } = useSelector(overlayToolSelector);

  useEffect(() => {
    if (workspaceId == null) return;

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

  if (workspaceId == null) return null;

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
      >
        <MockupBlock
          color="#415bad"
          height="100px"
          width="100px"
        >Preview Item</MockupBlock>
        <OverlayDisplay
          containerDimensions={workspaceProperties.previewWindowDimensions}
        />
      </PreviewWindow>
      <ControlsContainer>
        <WorkspaceControls />
      </ControlsContainer>
    </Stack>
  );
};
