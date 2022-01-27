import { configureStore, combineReducers } from "@reduxjs/toolkit";

import pageDimensions from "./features/pageDimensions/pageDimensionsSlice";
import workspace from "./features/workspace/workspaceSlice";
import overlayTool from "./features/overlayTool/overlayToolSlice";
import broadcastGraphics from "./features/broadcast/graphics/broadcastGraphicsSlice";

export const store = configureStore({
  reducer: combineReducers({
    pageDimensions,
    workspace,
    overlayTool,
    broadcastGraphics,
  }),
});
