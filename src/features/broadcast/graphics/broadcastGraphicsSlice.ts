import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  BGChyrons,
  BGStatusIndicatorModes,
  BGTimingTowerFocusedCarsMode,
  BGTimingTowerModes,
  OpenState,
  RootState,
} from "../../../types/state";

const initialState: RootState["broadcastGraphics"] = {
  chyrons: null,
  timingBoard: {
    relativePos: {},
    openState: 0,
    statusIndicator: {
      mode: BGStatusIndicatorModes.NormalNarrow,
    },
    timingTower: {
      open: 1,
      mode: BGTimingTowerModes.Leader,
      focusedCars: [],
      focusedCarsMode: BGTimingTowerFocusedCarsMode.None,
    },
  },
};

export const broadcastGraphicsSlice = createSlice({
  name: "broadcastGraphics",
  initialState,
  reducers: {
    setChyrons: (state, action: PayloadAction<BGChyrons>) => {
      state.chyrons = action.payload;
    },
    setChyronsOpenState: (state, action: PayloadAction<OpenState>) => {
      if (state.chyrons == null) return;
      state.chyrons.openState = action.payload;

      if (state.chyrons != null) {
        state.chyrons.openState = action.payload;
      }
    },
    incrementChyronsOpenState: (state) => {
      if (state.chyrons == null) return;
      ++state.chyrons.openState;

      if (state.chyrons != null) {
        ++state.chyrons.openState;
      }
    },
    clearChyrons: (state) => {
      state.chyrons = null;
    },
  },
});

export const {
  setChyrons,
  setChyronsOpenState,
  incrementChyronsOpenState,
  clearChyrons,
} = broadcastGraphicsSlice.actions;
export default broadcastGraphicsSlice.reducer;
