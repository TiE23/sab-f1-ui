import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex } from "lodash";

import { RootState, Car } from "../../../types/state";

const initialState: RootState["broadcastDirector"] = {
  selectedCars: [],
};

const carMatch = (targetCar: Car) => (checkedCar: Car) =>
  checkedCar.driver.id === targetCar.driver.id;

export const broadcastDirectorSlice = createSlice({
  name: "broadcastDirector",
  initialState,
  reducers: {
    selectedCarsAdd: (state, action: PayloadAction<Car>) => {
      const index = findIndex(state.selectedCars, carMatch(action.payload));
      if (index === -1) {
        state.selectedCars = state.selectedCars.concat(action.payload);
      }
    },
    selectedCarsSet: (state, action: PayloadAction<Car>) => { // Might be removed.
      state.selectedCars = [action.payload];
    },
    selectedCarsRemove: (state, action: PayloadAction<Car | number>) => {
      const index = typeof action.payload === "number"
        ? action.payload
        : findIndex(state.selectedCars, carMatch(action.payload));
      state.selectedCars = state.selectedCars.slice(0, index).concat(
        state.selectedCars.slice(index + 1),
      );
    },
    selectedCarsClear: (state) => {
      state.selectedCars = [];
    },
  },
});

export const {
  selectedCarsAdd,
  selectedCarsSet,
  selectedCarsRemove,
  selectedCarsClear,
} = broadcastDirectorSlice.actions;
export default broadcastDirectorSlice.reducer;
