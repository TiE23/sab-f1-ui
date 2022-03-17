import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, GridSpot } from "../../../types/state";
import { Optional } from "../../../types/util";

const initialState: RootState["broadcastDirector"] = {
  selectedCars: [],
};

export const broadcastDirectorSlice = createSlice({
  name: "broadcastDirector",
  initialState,
  reducers: {
    pushSelectedCars: (state, action: PayloadAction<GridSpot>) => {
      if (!state.selectedCars.includes(action.payload)) {
        state.selectedCars.push(action.payload);
      }
    },
    setSelectedCars: (state, action: PayloadAction<GridSpot>) => { // Might be removed.
      state.selectedCars = [action.payload];
    },
    removeSelectedCars: (state, action: PayloadAction<GridSpot>) => {
      state.selectedCars = state.selectedCars.filter(grid => grid !== action.payload);
    },
    /**
     * Shortcut to clear out selected cars. There is also a trick - if you
     * provide a single Car it'll replace all selected cars with that single
     * car.
     * @param action Car (optional)
     */
    clearSelectedCars: (state, action: PayloadAction<Optional<GridSpot>>) => {
      if (action.payload == null) {
        state.selectedCars = [];
      } else {
        state.selectedCars = [action.payload];
      }
    },
  },
});

export const {
  pushSelectedCars,
  setSelectedCars,
  removeSelectedCars,
  clearSelectedCars,
} = broadcastDirectorSlice.actions;
export default broadcastDirectorSlice.reducer;
