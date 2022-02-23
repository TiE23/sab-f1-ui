import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useMeasure from "react-use-measure";

import { mainMenuDimensionsSelector } from "../../features/pageDimensions/pageDimensionsSelector";
import { setDimensions } from "../../features/pageDimensions/pageDimensionsSlice";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { IndexHeading } from "../Common/IndexHeading.styled";
import { WorkspaceList } from "./WorkspaceList";
import { LayoutGrid, LayoutGridItem } from "../Common/LayoutGrid.styled";

import { Workspace } from "./Workspace";
import { ChyronPrototypeControls } from "./PrototypingControls/ChyronPrototype";
import { AngledFlagWorkspace } from "./CustomWorkSpaces/AngledFlagWorkspace";
import { AngledFlagPrototypeControls } from "./PrototypingControls/AngledFlagPrototype";
import { ChyronContainer } from "../BroadcastGraphics/Chyrons/Container";
import { VenetianBlindsWorkspace } from "./CustomWorkSpaces/VenetianBlindsWorkspace";
import { VenetianBlindsPrototypeControls } from "./PrototypingControls/VenetianBlindsPrototype";
import { TimingBoard } from "../BroadcastGraphics/TimingBoard";
import { TimingTowerPrototypeControls } from "./PrototypingControls/TimingTowerPrototype";

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
            <Route index element={<IndexHeading>Workspaces Home</IndexHeading>} />
            <Route path="chyron" element={
              <Workspace
                workspaceId="chyron"
                previewContent={<ChyronContainer debug />}
                prototypeControls={<ChyronPrototypeControls />}
                showAnimationSpeedSelector
              />
            } />
            <Route path="chyronWide" element={
              <Workspace
                workspaceId="chyronWide"
                previewContent={<ChyronContainer debug />}
                prototypeControls={<ChyronPrototypeControls />}
                showAnimationSpeedSelector
              />
            } />
            <Route path="angledFlagCountry" element={
              <Workspace
                workspaceId="angledFlagCountry"
                previewContent={<AngledFlagWorkspace flagMode="country"/>}
                prototypeControls={<AngledFlagPrototypeControls flagMode="country" />}
              />
            } />
            <Route path="angledFlagTeam" element={
              <Workspace
                workspaceId="angledFlagTeam"
                previewContent={<AngledFlagWorkspace flagMode="team"/>}
                prototypeControls={<AngledFlagPrototypeControls flagMode="team"/>}
              />
            } />
            <Route path="venetianTransition" element={
              <Workspace
                workspaceId="venetianTransition"
                previewContent={<VenetianBlindsWorkspace />}
                prototypeControls={<VenetianBlindsPrototypeControls />}
              />
            } />
            <Route path="timingBoard" element={
              <Workspace
                workspaceId="timingBoard"
                previewContent={<TimingBoard />}
                prototypeControls={<TimingTowerPrototypeControls />}
                bleedover={500}
              />
            } />
            <Route path="*" element={<IndexHeading>Unknown Workspace</IndexHeading>} />
          </Routes>
        </FullScreenContainer>
      </LayoutGridItem>
    </LayoutGrid>
  );
}
