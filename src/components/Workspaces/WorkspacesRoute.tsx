import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { menuDimensionsSelector } from "../../features/pageDimensions/pageDimensionsSelector";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { WorkspaceList } from "./WorkspaceList";
import { LayoutGrid, LayoutGridItem } from "../Common/LayoutGrid.styled";
import { OverlayDisplay } from "../OverlayTool";

export default function Workspaces() {
  const { height } = useSelector(menuDimensionsSelector);

  return (
    <FullScreenContainer minHeight={700} minWidth={900} heightCutoff={height}>
      <LayoutGrid columns={["180px", 1]} rows={1}>
        <LayoutGridItem column={1} row={1}>
          <WorkspaceList headerOffset={height} />
        </LayoutGridItem>
        <LayoutGridItem column={2} row={1}>
          <Outlet />
          <OverlayDisplay />
        </LayoutGridItem>
      </LayoutGrid>
    </FullScreenContainer>
  );
}
