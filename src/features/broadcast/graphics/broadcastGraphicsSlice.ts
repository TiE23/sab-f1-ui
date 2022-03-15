import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  BGChyrons,
  BGStatusIndicatorModes,
  BGTimingTowerDisplayMode,
  BGTimingTowerFocusedCarsMode,
  BGTimingTowerSplitsMode,
  OpenState,
  RootState,
} from "../../../types/state";

const initialState: RootState["broadcastGraphics"] = {
  chyrons: null,
  timingBoard: {
    placement: { top: "54px", left: "96px" },
    openState: 1,
    statusIndicator: {
      mode: BGStatusIndicatorModes.LapNarrow,
    },
    timingTower: {
      open: 1,
      displayMode: BGTimingTowerDisplayMode.LeftAndRight,
      splitsMode: BGTimingTowerSplitsMode.Leader,
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

    // Timing Board
    setTimingTowerSplitsMode: (state, action: PayloadAction<BGTimingTowerSplitsMode>) => {
      state.timingBoard.timingTower.splitsMode = action.payload;
    },
    setTimingTowerDisplayMode: (state, action: PayloadAction<BGTimingTowerDisplayMode>) => {
      if (action.payload === BGTimingTowerDisplayMode.FullLeft) {
        state.timingBoard.statusIndicator.mode = BGStatusIndicatorModes.LapWide;
      } else {
        state.timingBoard.statusIndicator.mode = BGStatusIndicatorModes.LapNarrow;
      }
      state.timingBoard.timingTower.displayMode = action.payload;
    },
  },
});

export const {
  setChyrons,
  setChyronsOpenState,
  incrementChyronsOpenState,
  clearChyrons,
  setTimingTowerSplitsMode,
  setTimingTowerDisplayMode,
} = broadcastGraphicsSlice.actions;
export default broadcastGraphicsSlice.reducer;
