import { useState } from "react";
import { useIntervalWhen } from "rooks";
import { useDispatch, useSelector } from "react-redux";

import { eventSelector } from "../../../../features/event/eventSelector";
import { EventStatus, GridSpot } from "../../../../types/state";
import { Milliseconds } from "../../../../types/util";
import { increaseDistance, refreshRunningOrder } from "../../../../features/event/eventSlice";

const UPDATE_TICK_MS: Milliseconds = 1500;
const SUB_DIVISIONS = 1;

export function EventLoop() {
  const dispatch = useDispatch();
  const { eventStatus, grid, sortedGridSpots } = useSelector(eventSelector);

  const gridSpots: GridSpot[] = Array.from(Array(grid.length).keys());

  const [tick, setTick] = useState(0);
  const amount = Math.ceil(gridSpots.length / SUB_DIVISIONS);

  useIntervalWhen(
    () => {
      const selectedGridSpots = sortedGridSpots.slice(tick, tick + amount);
      dispatch(increaseDistance({
        gridSpots: selectedGridSpots,
        distance: UPDATE_TICK_MS / 1000 * 61, // 61 m/s for Spa.
        randomness: 0.008,
        usePerformance: true,
      }));
      dispatch(refreshRunningOrder());

      if ((tick + amount) > gridSpots.length) {
        setTick(0);
      } else {
        setTick(tick + amount);
      }
    },
    UPDATE_TICK_MS / SUB_DIVISIONS,
    eventStatus === EventStatus.Running,
    true,
  );

  return null;
}
