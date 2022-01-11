import { configureStore, combineReducers } from "@reduxjs/toolkit";

import pageDimensions from "./features/pageDimensions/pageDimensionsSlice";
import workspace from "./features/workspace/workspaceSlice";
import overlayTool from "./features/overlayTool/overlayToolSlice";

export const store = configureStore({
  reducer: combineReducers({
    pageDimensions,
    workspace,
    overlayTool,
  }),
});
