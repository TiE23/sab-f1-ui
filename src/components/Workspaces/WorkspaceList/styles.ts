import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

export const WorkspaceListBox = styled(PadBox).attrs(() => ({
  padding: ["lg", "md"],
}))`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, #f0f0f0, #fff);
  border-right: 1px solid ${p => p.theme.colors.darkGrey};
`;
