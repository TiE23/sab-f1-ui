import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  RootState,
  OverlayPosition,
  OverlayId,
  AppDimensions,
} from "../../types/state";

const initialState: RootState["overlayTool"] = {
  overlayIds: [],
  currentOverlayId: null,
  currentOverlayItem: null,
  visible: false,
};

const makeNewOverlayItem = (
  overlayId: OverlayId,
  appDimensions: AppDimensions,
) => ({
  id: overlayId,
  position: {
    x: appDimensions.width / 2,
    y: appDimensions.height / 2,
  },
  opacity: 1,
  scale: 1,
});


type InitNewOverlayItemAction = {
  overlayId: OverlayId,
  appDimensions: AppDimensions,
};

export const overlayToolSlice = createSlice({
  name: "overlayTool",
  initialState,
  reducers: {
    initNewOverlayItem: (state, action: PayloadAction<InitNewOverlayItemAction>) => {
      if (state.currentOverlayItem == null) {
        state.currentOverlayItem = makeNewOverlayItem(
          action.payload.overlayId,
          action.payload.appDimensions,
        );
        state.currentOverlayId = action.payload.overlayId;
      }
    },
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setOverlayIds: (state, action: PayloadAction<Array<OverlayId>>) => {
      state.overlayIds = action.payload;
    },
    setCurrentOverlayId: (state, action: PayloadAction<OverlayId>) => {
      if (
        action.payload !== state.currentOverlayId &&
        state.currentOverlayItem != null
      ) {
        state.currentOverlayId = action.payload;
        state.currentOverlayItem.id = action.payload;
      }
    },
    setPosition: (state, action: PayloadAction<OverlayPosition>) => {
      if (state.currentOverlayItem != null) {
        state.currentOverlayItem.position = action.payload;
      }
    },
  },
});

export const {
  initNewOverlayItem,
  setVisibility,
  setOverlayIds,
  setCurrentOverlayId,
  setPosition,
} = overlayToolSlice.actions;
export default overlayToolSlice.reducer;
