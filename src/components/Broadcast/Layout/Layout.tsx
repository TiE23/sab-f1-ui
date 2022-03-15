import { MockupBlock } from "../../Common/MockupBlock.styled";
import VideoFeed from "../VideoFeed/VideoFeed";
import { LayoutGrid, LayoutGridItem } from "../../Common/LayoutGrid.styled";
import { TimingTowerPrototypeControls } from "../../Workspaces/PrototypingControls/TimingTowerPrototype";

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

      <LayoutGridItem column={2} row={1} columnSpan={5} rowSpan={7} >
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

      <LayoutGridItem column={2} row={8} columnSpan={5} rowSpan={3}>
        <TimingTowerPrototypeControls />
      </LayoutGridItem>
    </LayoutGrid>
  );
}
