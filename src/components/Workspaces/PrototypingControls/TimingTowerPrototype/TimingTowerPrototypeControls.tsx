import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch, useSelector } from "react-redux";
import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { setTimingTowerSplitsMode } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { eventSelector } from "../../../../features/event/eventSelector";
import { increaseDistance, refreshRunningOrder, setCarStatus } from "../../../../features/event/eventSlice";
import { BGTimingTowerSplitsMode, CarStatus } from "../../../../types/state";
import { GridSelection } from "../GridSelection";

import { ClickSpan } from "./styles";

export function TimingTowerPrototypeControls() {
  const dispatch = useDispatch();
  const { selectedCars } = useSelector(broadcastDirectorSelector);
  const { timingBoard: { timingTower: { splitsMode } } } = useSelector(broadcastGraphicsSelector);
  const { grid } = useSelector(eventSelector);

  return (
    <Split gutter="md">
      <InlineCluster as={PadBox} padding="md" gutter="md">
        <ClickSpan onClick={() => dispatch(refreshRunningOrder())}>
      Refresh Running Order
        </ClickSpan>
        <ClickSpan
          onClick={() => {
            if (splitsMode === BGTimingTowerSplitsMode.Interval) {
              dispatch(setTimingTowerSplitsMode(BGTimingTowerSplitsMode.Leader));
            } else {
              dispatch(setTimingTowerSplitsMode(BGTimingTowerSplitsMode.Interval));
            }
          }}
        >
      Splits Mode = {BGTimingTowerSplitsMode[splitsMode]}
        </ClickSpan>
        <ClickSpan
          onClick={() => {
            dispatch(increaseDistance({
              cars: selectedCars,
              distance: 200,
              randomness: 0,
              usePerformance: false,
            }));
            dispatch(refreshRunningOrder());
          }}
        >
          +200m to cars
        </ClickSpan>
        <ClickSpan
          onClick={() => {
            dispatch(increaseDistance({
              cars: grid,
              distance: 100,
              randomness: 0.05,
              usePerformance: true,
            }));
            dispatch(refreshRunningOrder());
          }}
        >
          +100m performance to all
        </ClickSpan>
        <ClickSpan
          onClick={() => {
            dispatch(setCarStatus({
              cars: selectedCars,
              status: CarStatus.Retired,
            }));
            dispatch(refreshRunningOrder());
          }}
        >
          Retire cars
        </ClickSpan>
        <ClickSpan
          onClick={() => {
            dispatch(setCarStatus({
              cars: selectedCars,
              status: CarStatus.Normal,
            }));
            dispatch(refreshRunningOrder());
          }}
        >
          Un-retire cars
        </ClickSpan>
      </InlineCluster>
      <PadBox padding="md">
        <GridSelection />
      </PadBox>
    </Split>
  );
}
