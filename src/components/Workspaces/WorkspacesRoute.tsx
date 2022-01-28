import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useMeasure from "react-use-measure";

import { mainMenuDimensionsSelector } from "../../features/pageDimensions/pageDimensionsSelector";
import { setDimensions } from "../../features/pageDimensions/pageDimensionsSlice";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { WorkspaceList } from "./WorkspaceList";
import { LayoutGrid, LayoutGridItem } from "../Common/LayoutGrid.styled";

import { Workspace } from "./Workspace";
import { ChyronDriver } from "../BroadcastGraphics/Chyrons/Driver";
import { ChyronPrototypeControls } from "./PrototypingControls/ChyronPrototype";
import { AngledFlagWorkSpace } from "./CustomWorkSpaces/AngledFlagWorkSpace";
import { AngledFlagPrototypeControls } from "./PrototypingControls/AngledFlagPrototype";

const WORKSPACE_LIST_WIDTH = 180;

export default function Workspaces() {
  const { height: mainMenuHeight } = useSelector(mainMenuDimensionsSelector);
  const dispatch = useDispatch();
  const [workspaceRef, {
    height: workspaceHeight,
    width: workspaceWidth,
  }] = useMeasure();

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
          <Routes>
            <Route index element={<h1>Workspaces Home</h1>} />
            <Route path="chyronDriver" element={
              <Workspace
                workspaceId="chyronDriver"
                previewContent={<ChyronDriver />}
                prototypeControls={<ChyronPrototypeControls />}
              />
            } />
            <Route path="angledFlag" element={
              <Workspace
                workspaceId="angledFlag"
                previewContent={<AngledFlagWorkSpace />}
                prototypeControls={<AngledFlagPrototypeControls />}
              />
            } />
            <Route path="*" element={<h1>Unknown Workspace</h1>} />
          </Routes>
        </FullScreenContainer>
      </LayoutGridItem>
    </LayoutGrid>
  );
}
