import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { menuSelector } from "../../features/pageDimensions/pageDimensionsSelector";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { WorkspaceList } from "./WorkspaceList";
import { LayoutGrid, LayoutGridItem } from "../Common/LayoutGrid.styled";

export default function Workspaces() {
  const { height } = useSelector(menuSelector);

  return (
    <FullScreenContainer minHeight={700} minWidth={900} heightCutoff={height}>
      <LayoutGrid columns={["180px", 1]} rows={1}>
        <LayoutGridItem column={1} row={1}>
          <WorkspaceList headerOffset={height} />
        </LayoutGridItem>
        <LayoutGridItem column={2} row={1}>
          <Outlet />
        </LayoutGridItem>
      </LayoutGrid>
    </FullScreenContainer>
  );
}
