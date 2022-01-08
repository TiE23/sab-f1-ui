import { useParams } from "react-router-dom";
import { Cover } from "@bedrock-layout/cover";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";

import { PreviewWindow, H2 } from "./styles";
import { WorkspaceControls } from "./WorkspaceControls";
import { MockupBlock } from "../../Common/MockupBlock.styled";

import { workspaceObject } from "../workspaces";

export const Workspace = () => {
  const { workspaceId } = useParams();
  return (
    <Stack
      gutter="lg"
      as={Center}
      maxWidth="80%"
      centerChildren
    >
      <H2>{workspaceId ? workspaceObject[workspaceId] : "Unknown"}</H2>
      <PreviewWindow height={600} width={800} animatedBG>
        <MockupBlock
          color="#415bad"
          height="300px"
          width="400px"
        >Preview Item</MockupBlock>
      </PreviewWindow>
      <WorkspaceControls />
    </Stack>
  );
};
