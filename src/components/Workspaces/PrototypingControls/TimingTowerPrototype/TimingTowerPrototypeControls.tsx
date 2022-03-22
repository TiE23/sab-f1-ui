import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { Stack } from "@bedrock-layout/stack";
import { useDispatch, useSelector } from "react-redux";

import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";
import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { eventSelector } from "../../../../features/event/eventSelector";
import { setTimingTowerDisplayMode, setTimingTowerSplitsMode } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { awardFastestLap, increaseDistance, refreshRunningOrder, setCarStatus } from "../../../../features/event/eventSlice";
import { BGTimingTowerDisplayMode, BGTimingTowerSplitsMode, CarStatus } from "../../../../types/state";

import { GridSelection } from "../GridSelection";
import { ClickSpan } from "../../../Common/Inputs/ClickSpan.styled";

export function TimingTowerPrototypeControls() {
  const dispatch = useDispatch();
  const { selectedCars } = useSelector(broadcastDirectorSelector);
  const { timingBoard: { timingTower: { splitsMode, displayMode } } } = useSelector(broadcastGraphicsSelector);
  const { grid } = useSelector(eventSelector);

  return (
    <Split gutter="md">
      <Stack gutter="md">

        <PadBox padding="md">
          <InlineCluster gutter="md">
            <ClickSpan onClick={() => dispatch(refreshRunningOrder())}>
              Refresh Running Order
            </ClickSpan>
            <ClickSpan
              onClick={() => {
                dispatch(increaseDistance({
                  gridSpots: selectedCars,
                  distance: 200,
                  randomness: 0,
                  usePerformance: false,
                }));
                dispatch(refreshRunningOrder());
              }}
            >
              +200m
            </ClickSpan>
            <ClickSpan
              onClick={() => {
                dispatch(increaseDistance({
                  gridSpots: Array.from(Array(grid.length).keys()),
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
                dispatch(increaseDistance({
                  gridSpots: Array.from(Array(grid.length).keys()),
                  distance: 1000,
                  randomness: 0.05,
                  usePerformance: true,
                }));
                dispatch(refreshRunningOrder());
              }}
            >
              +1000m performance to all
            </ClickSpan>
            <ClickSpan
              onClick={() => {
                dispatch(setCarStatus({
                  gridSpots: selectedCars,
                  status: CarStatus.Retired,
                }));
                dispatch(refreshRunningOrder());
              }}
            >
              Retire
            </ClickSpan>
            <ClickSpan
              onClick={() => {
                dispatch(setCarStatus({
                  gridSpots: selectedCars,
                  status: CarStatus.Normal,
                }));
                dispatch(refreshRunningOrder());
              }}
            >
              Un-retire
            </ClickSpan>
            <ClickSpan
              onClick={() => {
                if (selectedCars.length > 0) {
                  dispatch(awardFastestLap(selectedCars[0]));
                }
              }}
            >
              Award FL
            </ClickSpan>
          </InlineCluster>
          <hr />
          <InlineCluster gutter="md">
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
            <ClickSpan onClick={() => dispatch(setTimingTowerDisplayMode(BGTimingTowerDisplayMode.Hidden))}>
              {(displayMode === BGTimingTowerDisplayMode.Hidden ? "*" : "") + "Hidden"}
            </ClickSpan>
            <ClickSpan onClick={() => dispatch(setTimingTowerDisplayMode(BGTimingTowerDisplayMode.LeftOnly))}>
              {(displayMode === BGTimingTowerDisplayMode.LeftOnly ? "*" : "") + "LeftOnly"}
            </ClickSpan>
            <ClickSpan onClick={() => dispatch(setTimingTowerDisplayMode(BGTimingTowerDisplayMode.LeftAndRight))}>
              {(displayMode === BGTimingTowerDisplayMode.LeftAndRight ? "*" : "") + "LeftAndRight"}
            </ClickSpan>
            <ClickSpan onClick={() => dispatch(setTimingTowerDisplayMode(BGTimingTowerDisplayMode.FullLeft))}>
              {(displayMode === BGTimingTowerDisplayMode.FullLeft ? "*" : "") + "FullLeft"}
            </ClickSpan>

          </InlineCluster>
        </PadBox>
      </Stack>

      <PadBox padding="md">
        <GridSelection />
      </PadBox>
    </Split>
  );
}
