import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";

import { PreviewWindow, H2, ControlsContainer } from "./styles";
import { WorkspaceControls } from "./WorkspaceControls";
import { MockupBlock } from "../../Common/MockupBlock.styled";

import { workspaceObject } from "../workspaces";

export const Workspace = () => {
  const { workspaceId } = useParams();
  const { animatedBG } = useSelector(workspaceSelector);
  return (
    <Stack
      gutter="lg"
      as={Center}
      maxWidth="80%"
      centerChildren
    >
      <H2>{workspaceId ? workspaceObject[workspaceId] : "Unknown"}</H2>
      <PreviewWindow height={600} width={800} animatedBG={animatedBG}>
        <MockupBlock
          color="#415bad"
          height="300px"
          width="400px"
        >Preview Item</MockupBlock>
      </PreviewWindow>
      <ControlsContainer>
        <WorkspaceControls />
      </ControlsContainer>
    </Stack>
  );
};
