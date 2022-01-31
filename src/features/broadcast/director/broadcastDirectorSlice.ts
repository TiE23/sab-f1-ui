import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex } from "lodash";

import { RootState, Car } from "../../../types/state";
import { Optional } from "../../../types/util";
import { carMatch } from "../../../utils/comparators";

const initialState: RootState["broadcastDirector"] = {
  selectedCars: [],
};

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
    /**
     * Shortcut to clear out selected cars. There is also a trick - if you
     * provide a single Car it'll replace all selected cars with that single
     * car.
     * @param action Car (optional)
     */
    selectedCarsClear: (state, action: PayloadAction<Optional<Car>>) => {
      if (action.payload == null) {
        state.selectedCars = [];
      } else {
        state.selectedCars = [action.payload];
      }
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
