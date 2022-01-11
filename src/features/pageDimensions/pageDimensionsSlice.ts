import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, MenuDimensions, AppDimensions } from "../../types/state";

const initialState: RootState["pageDimensions"] = {
  menu: {
    height: 0,
  },
  app: {
    height: 0,
    width: 0,
  },
};

export const pageDimensionsSlice = createSlice({
  name: "pageDimensions",
  initialState,
  reducers: {
    setMenuDimensions: (state, action: PayloadAction<MenuDimensions>) => {
      state.menu = action.payload;
    },
    setAppDimensions: (state, action: PayloadAction<AppDimensions>) => {
      state.app = action.payload;
    },
  },
});

export const { setMenuDimensions, setAppDimensions } = pageDimensionsSlice.actions;
export default pageDimensionsSlice.reducer;
