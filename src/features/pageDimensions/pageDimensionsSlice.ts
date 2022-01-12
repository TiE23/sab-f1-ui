import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, Dimensions } from "../../types/state";

const initialState: RootState["pageDimensions"] = {
  mainMenu: { height: 0, width: 0 },
  app: { height: 0, width: 0 },
  workspace: { height: 0, width: 0 },
};

type SetDimensionsAction = {
  name: "mainMenu" | "app" | "workspace",
  dimensions: Dimensions,
};

export const pageDimensionsSlice = createSlice({
  name: "pageDimensions",
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<SetDimensionsAction>) => {
      state[action.payload.name] = action.payload.dimensions;
    },
  },
});

export const { setDimensions } = pageDimensionsSlice.actions;
export default pageDimensionsSlice.reducer;
