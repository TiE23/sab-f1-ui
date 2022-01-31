import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BGChyrons, OpenState, RootState } from "../../../types/state";

const initialState: RootState["broadcastGraphics"] = {
  chyrons: null,
};

export const broadcastGraphicsSlice = createSlice({
  name: "broadcastGraphics",
  initialState,
  reducers: {
    chyronsSet: (state, action: PayloadAction<BGChyrons>) => {
      state.chyrons = action.payload;
    },
    chyronsOpenStateSet: (state, action: PayloadAction<OpenState>) => {
      if (state.chyrons == null) return;
      state.chyrons.openState = action.payload;

      if (state.chyrons != null) {
        state.chyrons.openState = action.payload;
      }
    },
    chyronsOpenStateIncrement: (state) => {
      if (state.chyrons == null) return;
      ++state.chyrons.openState;

      if (state.chyrons != null) {
        ++state.chyrons.openState;
      }
    },
    chyronsClear: (state) => {
      state.chyrons = null;
    },
  },
});

export const {
  chyronsSet,
  chyronsOpenStateSet,
  chyronsOpenStateIncrement,
  chyronsClear,
} = broadcastGraphicsSlice.actions;
export default broadcastGraphicsSlice.reducer;
