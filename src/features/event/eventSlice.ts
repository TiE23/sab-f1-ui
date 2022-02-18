import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CourseFlag, CarStatus, RootState, Tyre, TyreCompound, CarNotice } from "../../types/state";
import { cloneDriver } from "../../utils/dataLookup";

const DEFAULT_TYRE: Tyre = {
  compound: TyreCompound.Medium,
  age: 0,
  new: true,
};

const initialState: RootState["event"] = {
  trackName: "Circuit de Spa-Franchorchamps",
  trackLength: 7004,
  courseStatus: {
    courseFlag: "green",
    sectorFlags: ["green", "green", "green"],
    safetyCar: "clear",
    virtualSafetyCar: "clear",
  },
  mode: "race",
  progress: {
    startTime: Date.now(),
    timeLimit: 60 * 60 * 2 * 1000,
    currentLap: 1,
    lapCount: 10,
  },
  leaderGridSpot: 0,
  grid: [
    {
      position: 1,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [CarNotice.FastestLap],
      distance: 2000 * 4,
      driver: cloneDriver("verstappen"),
    },
    {
      position: 2,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1900 * 4,
      driver: cloneDriver("hamilton"),
    },
    {
      position: 3,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1800 * 4,
      driver: cloneDriver("bottas"),
    },
    {
      position: 4,
      status: CarStatus.Retired,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1700 * 4,
      driver: cloneDriver("perez"),
    },
    {
      position: 5,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1600 * 4,
      driver: cloneDriver("sainz"),
    },
    {
      position: 6,
      status: CarStatus.Retired,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1500 * 4,
      driver: cloneDriver("norris"),
    },
    {
      position: 7,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1400 * 4,
      driver: cloneDriver("leclerc"),
    },
    {
      position: 8,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1300 * 4,
      driver: cloneDriver("ricciardo"),
    },
    {
      position: 9,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1200 * 4,
      driver: cloneDriver("gasly"),
    },
    {
      position: 10,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1100 * 4,
      driver: cloneDriver("alonso"),
    },
    {
      position: 11,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 1000 * 4,
      driver: cloneDriver("ocon"),
    },
    {
      position: 12,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 900 * 4,
      driver: cloneDriver("vettel"),
    },
    {
      position: 13,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 800 * 4,
      driver: cloneDriver("stroll"),
    },
    {
      position: 14,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 700 * 4,
      driver: cloneDriver("tsunoda"),
    },
    {
      position: 15,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 600 * 4,
      driver: cloneDriver("russell"),
    },
    {
      position: 16,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 500 * 4,
      driver: cloneDriver("raikkonen"),
    },
    {
      position: 17,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 400 * 4,
      driver: cloneDriver("latifi"),
    },
    {
      position: 18,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 300 * 4,
      driver: cloneDriver("giovinazzi"),
    },
    {
      position: 19,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 200 * 4,
      driver: cloneDriver("schumacher"),
    },
    {
      position: 20,
      status: CarStatus.Normal,
      tyre: DEFAULT_TYRE,
      notices: [],
      distance: 100 * 4,
      driver: cloneDriver("mazepin"),
    },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setCourseFlag: (state, action: PayloadAction<CourseFlag>) => {
      state.courseStatus.courseFlag = action.payload;
    },
    calculateLeader: (state) => {
      let leader = 0;
      let greatestDistance = Number.MIN_SAFE_INTEGER;
      for (let p = 0; p < state.grid.length; ++p) {
        if (state.grid[p].distance > greatestDistance) {
          leader = p;
          greatestDistance = state.grid[p].distance;
        }
      }
      state.leaderGridSpot = leader;
    },
  },
});

export const {
  setCourseFlag,
  calculateLeader,
} = eventSlice.actions;
export default eventSlice.reducer;
