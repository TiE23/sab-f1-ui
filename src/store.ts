import { configureStore, combineReducers } from "@reduxjs/toolkit";

import pageDimensions from "./features/pageDimensions/pageDimensionsSlice";
import workspace from "./features/workspace/workspaceSlice";
import overlayTool from "./features/overlayTool/overlayToolSlice";
import event from "./features/event/eventSlice";
import broadcastDirector from "./features/broadcast/director/broadcastDirectorSlice";
import broadcastGraphics from "./features/broadcast/graphics/broadcastGraphicsSlice";

export const store = configureStore({
  reducer: combineReducers({
    pageDimensions,
    workspace,
    overlayTool,
    event,
    broadcastDirector,
    broadcastGraphics,
  }),
});
