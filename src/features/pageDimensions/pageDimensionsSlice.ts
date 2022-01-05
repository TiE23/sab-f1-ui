import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, MenuDimensions } from "../../types/state";

const initialState: RootState["pageDimensions"] = {
  menu: {
    height: 0,
  },
};

export const pageDimensionsSlice = createSlice({
  name: "pageDimensions",
  initialState,
  reducers: {
    setMenuDimensions: (state, action: PayloadAction<MenuDimensions>) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenuDimensions } = pageDimensionsSlice.actions;
export default pageDimensionsSlice.reducer;
