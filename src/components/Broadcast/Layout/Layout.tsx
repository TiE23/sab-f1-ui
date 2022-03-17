import { PadBox } from "@bedrock-layout/padbox";

import VideoFeed from "../VideoFeed/VideoFeed";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { LayoutGrid, LayoutGridItem } from "../../Common/LayoutGrid.styled";
import { TimingTowerPrototypeControls } from "../../Workspaces/PrototypingControls/TimingTowerPrototype";
import { ChyronsDirectorControls } from "../BroadcastDirectorUI/Chyrons";

type LayoutProps = {
  headerHeight?: number,
};

export function Layout({ headerHeight }: LayoutProps) {
  return (
    <LayoutGrid headerOffset={headerHeight} columns={6} rows={10}>
      <LayoutGridItem column={1} row={1} rowSpan={6}>
        <MockupBlock
          color="#f7aeae"
          minWidth="200px"
        >Timing Board UI</MockupBlock>
      </LayoutGridItem>

      <LayoutGridItem column={2} row={1} columnSpan={5} rowSpan={8} >
        <VideoFeed />
      </LayoutGridItem>

      <LayoutGridItem column={1} row={7} rowSpan={3}>
        <MockupBlock
          color="#5576e2"
        >Race Status UI</MockupBlock>
      </LayoutGridItem>

      <LayoutGridItem column={1} row={10}>
        <MockupBlock
          color="#bc62ce"
        >Race Director UI</MockupBlock>
      </LayoutGridItem>

      <LayoutGridItem column={2} row={9} columnSpan={5} rowSpan={2}>
        <PadBox padding="lg">
          <TimingTowerPrototypeControls />
          <ChyronsDirectorControls />
        </PadBox>
      </LayoutGridItem>
    </LayoutGrid>
  );
}
