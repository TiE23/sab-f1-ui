import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BGChyrons, OpenState, RootState } from "../../../types/state";

const initialState: RootState["broadcastGraphics"] = {
  chyrons: null,
};

export const broadcastGraphicsSlice = createSlice({
  name: "broadcastGraphics",
  initialState,
  reducers: {
    chyronsLaunch: (state, action: PayloadAction<BGChyrons>) => {
      state.chyrons = action.payload;
    },
    chyronsOpenStateSet: (state, action: PayloadAction<OpenState>) => {
      if (state.chyrons == null) return;
      state.chyrons.primary.openState = action.payload;

      if (state.chyrons.secondary != null) {
        state.chyrons.secondary.openState = action.payload;
      }
    },
    chyronsOpenStateIncrement: (state) => {
      if (state.chyrons == null) return;
      ++state.chyrons.primary.openState;

      if (state.chyrons.secondary != null) {
        ++state.chyrons.secondary.openState;
      }
    },
    chyronsClear: (state) => {
      state.chyrons = null;
    },
  },
});

export const {
  chyronsLaunch,
  chyronsOpenStateSet,
  chyronsOpenStateIncrement,
  chyronsClear,
} = broadcastGraphicsSlice.actions;
export default broadcastGraphicsSlice.reducer;
