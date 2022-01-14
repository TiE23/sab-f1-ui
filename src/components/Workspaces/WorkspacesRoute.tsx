import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { mainMenuDimensionsSelector } from "../../features/pageDimensions/pageDimensionsSelector";
import { useDimensions } from "../../utils/hooks";
import { setDimensions } from "../../features/pageDimensions/pageDimensionsSlice";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { WorkspaceList } from "./WorkspaceList";
import { LayoutGrid, LayoutGridItem } from "../Common/LayoutGrid.styled";

const WORKSPACE_LIST_WIDTH = 180;

export default function Workspaces() {
  const { height: mainMenuHeight } = useSelector(mainMenuDimensionsSelector);
  const dispatch = useDispatch();
  const [workspaceRef, {
    height: workspaceHeight,
    width: workspaceWidth,
  }] = useDimensions<HTMLDivElement>();

  // Set Workspace dimensions.
  useEffect(() => {
    dispatch(setDimensions({
      name: "workspace",
      dimensions: { height: workspaceHeight, width: workspaceWidth },
    }));
  }, [workspaceHeight, workspaceWidth]);

  return (
    <LayoutGrid columns={[`${WORKSPACE_LIST_WIDTH}px`, 1]} rows={1}>
      <LayoutGridItem column={1} row={1}>
        <WorkspaceList headerOffset={mainMenuHeight} />
      </LayoutGridItem>
      <LayoutGridItem column={2} row={1}>
        <FullScreenContainer
          ref={workspaceRef}
          minHeight={700}
          minWidth={900}
          heightCutoff={mainMenuHeight}
          widthCutoff={WORKSPACE_LIST_WIDTH}
        >
          <Outlet />
        </FullScreenContainer>
      </LayoutGridItem>
    </LayoutGrid>
  );
}
