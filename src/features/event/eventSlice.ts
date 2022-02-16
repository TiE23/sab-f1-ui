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
    { position: 1, status: CarStatus.Normal, driver: cloneDriver("verstappen") },
    { position: 2, status: CarStatus.Normal, driver: cloneDriver("hamilton") },
    { position: 3, status: CarStatus.Normal, driver: cloneDriver("bottas") },
    { position: 4, status: CarStatus.Retired, driver: cloneDriver("perez") },
    { position: 5, status: CarStatus.Normal, driver: cloneDriver("sainz") },
    { position: 6, status: CarStatus.Retired, driver: cloneDriver("norris") },
    { position: 7, status: CarStatus.Normal, driver: cloneDriver("leclerc") },
    { position: 8, status: CarStatus.Normal, driver: cloneDriver("ricciardo") },
    { position: 9, status: CarStatus.Normal, driver: cloneDriver("gasly") },
    { position: 10, status: CarStatus.Normal, driver: cloneDriver("alonso") },
    { position: 11, status: CarStatus.Normal, driver: cloneDriver("ocon") },
    { position: 12, status: CarStatus.Normal, driver: cloneDriver("vettel") },
    { position: 13, status: CarStatus.Normal, driver: cloneDriver("stroll") },
    { position: 14, status: CarStatus.Normal, driver: cloneDriver("tsunoda") },
    { position: 15, status: CarStatus.Normal, driver: cloneDriver("russell") },
    { position: 16, status: CarStatus.Normal, driver: cloneDriver("raikkonen") },
    { position: 17, status: CarStatus.Normal, driver: cloneDriver("latifi") },
    { position: 18, status: CarStatus.Normal, driver: cloneDriver("giovinazzi") },
    { position: 19, status: CarStatus.Normal, driver: cloneDriver("schumacher") },
    { position: 20, status: CarStatus.Normal, driver: cloneDriver("mazepin") },
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
