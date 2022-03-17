import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { random } from "lodash";

import {
  CourseFlag,
  CarStatus,
  RootState,
  Tyre,
  TyreCompound,
  CarNotice,
  EventMode,
  SectorFlag,
  SafetyCarStatus,
  VirtualSafetyCarStatus,
  GridSpot,
} from "../../types/state";
import { Meters } from "../../types/util";
import { orMatch } from "../../utils/common";
import { cloneDriver, getTeam } from "../../utils/dataLookup";
import { driverToGridMap } from "../../utils/event";

const DEFAULT_TYRE: Tyre = {
  compound: TyreCompound.Medium,
  age: 0,
  new: true,
};

const GRID_POSITION_GAP: Meters = 8;
const POLE_TO_START: Meters = -10;

const initialState: RootState["event"] = {
  trackName: "Circuit de Spa-Franchorchamps",
  trackLength: 7004,
  courseStatus: {
    courseFlag: CourseFlag.Green,
    sectorFlags: [SectorFlag.Green, SectorFlag.Green, SectorFlag.Green],
    safetyCar: SafetyCarStatus.Clear,
    virtualSafetyCar: VirtualSafetyCarStatus.Clear,
  },
  mode: EventMode.Race,
  progress: {
    startTime: Date.now(),
    timeLimit: 60 * 60 * 2 * 1000,
    lapCount: 1,
    scheduledLaps: 44,
  },
  leaderGridSpot: 0,
  grid: [
    {
      position: 1,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [CarNotice.FastestLap],
      distance: POLE_TO_START - GRID_POSITION_GAP * 0,
      driver: cloneDriver("verstappen"),
    },
    {
      position: 2,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 1,
      driver: cloneDriver("hamilton"),
    },
    {
      position: 3,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 2,
      driver: cloneDriver("bottas"),
    },
    {
      position: 4,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 3,
      driver: cloneDriver("perez"),
    },
    {
      position: 5,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 4,
      driver: cloneDriver("sainz"),
    },
    {
      position: 6,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 5,
      driver: cloneDriver("norris"),
    },
    {
      position: 7,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 6,
      driver: cloneDriver("leclerc"),
    },
    {
      position: 8,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 7,
      driver: cloneDriver("ricciardo"),
    },
    {
      position: 9,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 8,
      driver: cloneDriver("gasly"),
    },
    {
      position: 10,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 9,
      driver: cloneDriver("alonso"),
    },
    {
      position: 11,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 10,
      driver: cloneDriver("ocon"),
    },
    {
      position: 12,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 11,
      driver: cloneDriver("vettel"),
    },
    {
      position: 13,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 12,
      driver: cloneDriver("stroll"),
    },
    {
      position: 14,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 13,
      driver: cloneDriver("tsunoda"),
    },
    {
      position: 15,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 14,
      driver: cloneDriver("russell"),
    },
    {
      position: 16,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 15,
      driver: cloneDriver("raikkonen"),
    },
    {
      position: 17,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 16,
      driver: cloneDriver("latifi"),
    },
    {
      position: 18,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 17,
      driver: cloneDriver("giovinazzi"),
    },
    {
      position: 19,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 18,
      driver: cloneDriver("schumacher"),
    },
    {
      position: 20,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: POLE_TO_START - GRID_POSITION_GAP * 19,
      driver: cloneDriver("mazepin"),
    },
  ],
  lastUpdate: Date.now(),
};

interface IncreaseDistanceAction {
  gridSpots: GridSpot[];
  distance: Meters;
  randomness: number;
  usePerformance: boolean;
}

interface SetCarStatusAction {
  gridSpots: GridSpot[];
  status: CarStatus;
}

/**
 * Note: Add `state.lastUpdate = Date.now();` to the end of every reducer to
 * keep components up to date that watch for changes with useEffect() functions.
 */
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setCourseFlag: (state, action: PayloadAction<CourseFlag>) => {
      state.courseStatus.courseFlag = action.payload;
      state.lastUpdate = Date.now();
    },
    refreshRunningOrder: (state) => {
      const sortingGrid = state.grid.map((car, index) => ({
        gridSpot: index,
        distance: car.distance,
        status: car.status,
      }));

      const add = (status: CarStatus) => {
        if (status === CarStatus.Retired) {
          return 1000000;
        } else if (status === CarStatus.DidNotStart) {
          return 2000000;
        }
        return 0;
      };

      sortingGrid.sort((a, b) =>
        // Retired cars go to the end but still maintain their own order.
        (b.distance - add(b.status)) - (a.distance - add(a.status)),
      );

      sortingGrid.forEach((entry, sortedPosition) => {
        state.grid[entry.gridSpot].position = sortedPosition + 1;
      });
      state.leaderGridSpot = sortingGrid[0].gridSpot;
      state.progress.lapCount =
        Math.max(1, Math.floor(sortingGrid[0].distance / state.trackLength) + 1);

      state.lastUpdate = Date.now();
    },
    increaseDistance: (state, action: PayloadAction<IncreaseDistanceAction>) => {
      const gridMap = driverToGridMap(state.grid);

      const { gridSpots, distance, randomness, usePerformance } = action.payload;

      gridSpots.forEach(gridSpot => {
        const car = state.grid[gridSpot];

        // Do not update cars that are DNS, retired, or finished.
        // This does remind me that Finished cars must be treated and reported
        // differently...
        if (orMatch(car.status, CarStatus.DidNotStart, CarStatus.Finished, CarStatus.Retired)) {
          return;
        }
        let addedDistance = distance;

        if (randomness !== 0){
          addedDistance *= random(1 - randomness, 1 + randomness);
        }
        if (usePerformance) {
          addedDistance *=
            getTeam(car.driver.team.id).performance + car.driver.performance;
        }
        state.grid[gridMap[car.driver.id]].distance += addedDistance;
      });
      state.lastUpdate = Date.now();
    },
    awardFastestLap: (state, action: PayloadAction<GridSpot>) => {
      // Awards fastest lap to provided car. Removes fastest lap from anyone else.
      state.grid.forEach((car, index) => {
        const fastestLapNoticeIndex = car.notices.findIndex(
          notice => notice === CarNotice.FastestLap,
        );
        if (car.driver.id === state.grid[action.payload].driver.id) {
          if (fastestLapNoticeIndex === -1) {
            state.grid[index].notices.push(CarNotice.FastestLap);
          }
        } else if (fastestLapNoticeIndex !== -1) {
          state.grid[index].notices.splice(fastestLapNoticeIndex, 1);
        }
      });
      state.lastUpdate = Date.now();
    },
    setCarStatus: (state, action: PayloadAction<SetCarStatusAction>) => {
      const gridMap = driverToGridMap(state.grid);
      const { gridSpots, status } = action.payload;
      gridSpots.forEach(gridSpot => {
        const car = state.grid[gridSpot];
        state.grid[gridMap[car.driver.id]].status = status;
      });
      state.lastUpdate = Date.now();
    },
  },
});

export const {
  setCourseFlag,
  refreshRunningOrder,
  increaseDistance,
  awardFastestLap,
  setCarStatus,
} = eventSlice.actions;
export default eventSlice.reducer;
