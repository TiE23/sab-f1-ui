import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  RootState,
  WorkspaceId,
  OverlayPosition,
  OverlayId,
  OverlayIds,
} from "../../types/state";

const initialState: RootState["overlayTool"] = {
  currentWorkspaceId: "",
  overlayIds: [],
  currentOverlayId: null,
  currentOverlayItem: null,
  visible: false,
};


type InitNewOverlayItemAction = {
  overlayId: OverlayId,
  initialPosition: OverlayPosition,
  setVisible: boolean,
};

type NewWorkspaceAction = {
  overlayIds: OverlayIds,
  workspaceId: WorkspaceId,
}

export const overlayToolSlice = createSlice({
  name: "overlayTool",
  initialState,
  reducers: {
    initNewOverlayItem: (state, action: PayloadAction<InitNewOverlayItemAction>) => {
      if (state.currentOverlayItem == null) {
        state.currentOverlayItem = {
          position: action.payload.initialPosition,
          opacity: 1,
        };
        state.currentOverlayId = action.payload.overlayId;
        state.visible = action.payload.setVisible;
      }
    },
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setCurrentOverlayId: (state, action: PayloadAction<OverlayId>) => {
      if (
        action.payload !== state.currentOverlayId &&
        state.currentOverlayItem != null
      ) {
        state.currentOverlayId = action.payload;
      }
    },
    setPosition: (state, action: PayloadAction<OverlayPosition>) => {
      if (state.currentOverlayItem != null) {
        state.currentOverlayItem.position = action.payload;
      }
    },
    newWorkspace: (state, action: PayloadAction<NewWorkspaceAction>) => {
      state.currentOverlayId = null;
      state.currentOverlayItem = null;
      state.visible = false;
      state.currentWorkspaceId = action.payload.workspaceId;
      state.overlayIds = action.payload.overlayIds;
    },
    setOpacity: (state, action: PayloadAction<number>) => {
      if (state.currentOverlayItem == null) return;
      state.currentOverlayItem.opacity = action.payload;
    },
  },
});

export const {
  initNewOverlayItem,
  setVisibility,
  setCurrentOverlayId,
  setPosition,
  newWorkspace,
  setOpacity,
} = overlayToolSlice.actions;
export default overlayToolSlice.reducer;
