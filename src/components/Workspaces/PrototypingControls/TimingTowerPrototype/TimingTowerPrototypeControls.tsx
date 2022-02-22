import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { useDispatch, useSelector } from "react-redux";
import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { setTimingTowerSplitsMode } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";

import { refreshRunningOrder } from "../../../../features/event/eventSlice";
import { BGTimingTowerSplitsMode } from "../../../../types/state";

import { ClickSpan } from "./styles";

export function TimingTowerPrototypeControls() {
  const dispatch = useDispatch();
  const { timingBoard: { timingTower: { splitsMode } } } = useSelector(broadcastGraphicsSelector);

  return (
    <InlineCluster gutter="md">
      <ClickSpan
        onClick={() => {
          console.log("refreshRunningOrder");
          dispatch(refreshRunningOrder());
        }}
      >
      Refresh Running Order
      </ClickSpan>
      <ClickSpan
        onClick={() => {
          console.log("Swap Interval");
          if (splitsMode === BGTimingTowerSplitsMode.Interval) {
            dispatch(setTimingTowerSplitsMode(BGTimingTowerSplitsMode.Leader));
          } else {
            dispatch(setTimingTowerSplitsMode(BGTimingTowerSplitsMode.Interval));
          }
        }}
      >
      Splits Mode = {BGTimingTowerSplitsMode[splitsMode]}
      </ClickSpan>
    </InlineCluster>
  );
}
