import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CourseFlag, RootState } from "../../types/state";
import { getDriver } from "../../utils/dataLookup";

const initialState: RootState["event"] = {
  trackName: "Melbourne",
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
  grid: [
    { position: 1, driver: getDriver("verstappen") },
    { position: 3, driver: getDriver("hamilton") },
    { position: 2, driver: getDriver("bottas") },
    { position: 4, driver: getDriver("perez") },
    { position: 5, driver: getDriver("sainz") },
    { position: 6, driver: getDriver("norris") },
    { position: 7, driver: getDriver("leclerc") },
    { position: 8, driver: getDriver("ricciardo") },
    { position: 9, driver: getDriver("gasly") },
    { position: 10, driver: getDriver("alonso") },
    { position: 11, driver: getDriver("ocon") },
    { position: 12, driver: getDriver("vettel") },
    { position: 13, driver: getDriver("stroll") },
    { position: 14, driver: getDriver("tsunoda") },
    { position: 15, driver: getDriver("russell") },
    { position: 16, driver: getDriver("raikkonen") },
    { position: 17, driver: getDriver("latifi") },
    { position: 18, driver: getDriver("giovinazzi") },
    { position: 19, driver: getDriver("schumacher") },
    { position: 20, driver: getDriver("mazepin") },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    courseFlagSet: (state, action: PayloadAction<CourseFlag>) => {
      state.courseStatus.courseFlag = action.payload;
    },
  },
});

export const {
  courseFlagSet,
} = eventSlice.actions;
export default eventSlice.reducer;
