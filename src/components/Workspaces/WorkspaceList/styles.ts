import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

type WorkspaceListBoxProps = {
  headerOffset?: number,
};
export const WorkspaceListBox = styled(PadBox).attrs(() => ({
  padding: ["lg", "md"],
}))<WorkspaceListBoxProps>`
  height: calc(100vh - ${({ headerOffset = 0 }) => `${headerOffset}px`});
  width: 100%;
  background-image: linear-gradient(to bottom, #f0f0f0, #fff);
  border-right: 1px solid ${p => p.theme.colors.darkGrey};
  overflow-y: scroll;
`;
WorkspaceListBox.displayName = "WorkspaceListBox";
