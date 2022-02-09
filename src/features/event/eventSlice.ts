import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CourseFlag, RootState } from "../../types/state";
import { cloneDriver } from "../../utils/dataLookup";

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
    { position: 1, driver: cloneDriver("verstappen") },
    { position: 2, driver: cloneDriver("hamilton") },
    { position: 3, driver: cloneDriver("bottas") },
    { position: 4, driver: cloneDriver("perez") },
    { position: 5, driver: cloneDriver("sainz") },
    { position: 6, driver: cloneDriver("norris") },
    { position: 7, driver: cloneDriver("leclerc") },
    { position: 8, driver: cloneDriver("ricciardo") },
    { position: 9, driver: cloneDriver("gasly") },
    { position: 10, driver: cloneDriver("alonso") },
    { position: 11, driver: cloneDriver("ocon") },
    { position: 12, driver: cloneDriver("vettel") },
    { position: 13, driver: cloneDriver("stroll") },
    { position: 14, driver: cloneDriver("tsunoda") },
    { position: 15, driver: cloneDriver("russell") },
    { position: 16, driver: cloneDriver("raikkonen") },
    { position: 17, driver: cloneDriver("latifi") },
    { position: 18, driver: cloneDriver("giovinazzi") },
    { position: 19, driver: cloneDriver("schumacher") },
    { position: 20, driver: cloneDriver("mazepin") },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setCourseFlag: (state, action: PayloadAction<CourseFlag>) => {
      state.courseStatus.courseFlag = action.payload;
    },
  },
});

export const {
  setCourseFlag,
} = eventSlice.actions;
export default eventSlice.reducer;
