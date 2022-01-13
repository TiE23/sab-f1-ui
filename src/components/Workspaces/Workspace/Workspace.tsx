import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { setWorkspaceId } from "../../../features/workspace/workspaceSlice";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import { newWorkspace } from "../../../features/overlayTool/overlayToolSlice";

import { PreviewWindow, H2, ControlsContainer } from "./styles";
import { WorkspaceControls } from "./WorkspaceControls";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { OverlayDisplay } from "../../OverlayTool";

import { workspaceObject } from "../workspaces";

const PREVIEW_WINDOW_HEIGHT = 600;
const PREVIEW_WINDOW_WIDTH = 800;

export const Workspace = () => {
  const dispatch = useDispatch();
  const { workspaceId } = useParams();
  const { animatedBG } = useSelector(workspaceSelector);
  const { currentWorkspaceId: overlayWorkspaceId } = useSelector(overlayToolSelector);

  useEffect(() => {
    if (workspaceId == null) return;

    // Update workspace store for ID.
    dispatch(setWorkspaceId(workspaceId));

    // Switching Workspace means we need to init a newWorkspace for Overlay tool.
    if (overlayWorkspaceId !== workspaceId) {
      dispatch(newWorkspace({
        overlayIds: workspaceObject[workspaceId].overlayIds,
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
      <H2>{workspaceId ? workspaceObject[workspaceId].name : "Unknown"}</H2>
      <PreviewWindow
        height={PREVIEW_WINDOW_HEIGHT}
        width={PREVIEW_WINDOW_WIDTH}
        animatedBG={animatedBG}
      >
        <MockupBlock
          color="#415bad"
          height="300px"
          width="400px"
        >Preview Item</MockupBlock>
        <OverlayDisplay
          containerDimensions={{
            height: PREVIEW_WINDOW_HEIGHT,
            width: PREVIEW_WINDOW_WIDTH,
          }}
          bleedover={50}
        />
      </PreviewWindow>
      <ControlsContainer>
        <WorkspaceControls />
      </ControlsContainer>
    </Stack>
  );
};
