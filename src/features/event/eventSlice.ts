import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CourseFlag, CarStatus, RootState } from "../../types/state";
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
    { position: 1, status: CarStatus.Normal, distance: 2000 * 2, driver: cloneDriver("verstappen") },
    { position: 2, status: CarStatus.Normal, distance: 1900 * 2, driver: cloneDriver("hamilton") },
    { position: 3, status: CarStatus.Normal, distance: 1800 * 2, driver: cloneDriver("bottas") },
    { position: 4, status: CarStatus.Retired, distance: 1700 * 2, driver: cloneDriver("perez") },
    { position: 5, status: CarStatus.Normal, distance: 1600 * 2, driver: cloneDriver("sainz") },
    { position: 6, status: CarStatus.Retired, distance: 1500 * 2, driver: cloneDriver("norris") },
    { position: 7, status: CarStatus.Normal, distance: 1400 * 2, driver: cloneDriver("leclerc") },
    { position: 8, status: CarStatus.Normal, distance: 1300 * 2, driver: cloneDriver("ricciardo") },
    { position: 9, status: CarStatus.Normal, distance: 1200 * 2, driver: cloneDriver("gasly") },
    { position: 10, status: CarStatus.Normal, distance: 1100 * 2, driver: cloneDriver("alonso") },
    { position: 11, status: CarStatus.Normal, distance: 1000 * 2, driver: cloneDriver("ocon") },
    { position: 12, status: CarStatus.Normal, distance: 900 * 2, driver: cloneDriver("vettel") },
    { position: 13, status: CarStatus.Normal, distance: 800 * 2, driver: cloneDriver("stroll") },
    { position: 14, status: CarStatus.Normal, distance: 700 * 2, driver: cloneDriver("tsunoda") },
    { position: 15, status: CarStatus.Normal, distance: 600 * 2, driver: cloneDriver("russell") },
    { position: 16, status: CarStatus.Normal, distance: 500 * 2, driver: cloneDriver("raikkonen") },
    { position: 17, status: CarStatus.Normal, distance: 400 * 2, driver: cloneDriver("latifi") },
    { position: 18, status: CarStatus.Normal, distance: 300 * 2, driver: cloneDriver("giovinazzi") },
    { position: 19, status: CarStatus.Normal, distance: 200 * 2, driver: cloneDriver("schumacher") },
    { position: 20, status: CarStatus.Normal, distance: 1, driver: cloneDriver("mazepin") },
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
