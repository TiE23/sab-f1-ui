import { configureStore, combineReducers } from "@reduxjs/toolkit";

import pageDimensions from "./features/pageDimensions/pageDimensionsSlice";

export const store = configureStore({
  reducer: combineReducers({
    pageDimensions,
  }),
});
