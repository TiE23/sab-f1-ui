import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, WorkspaceId, WorkspaceProperties } from "../../types/state";

const initialState: RootState["workspace"] = {
  workspaceId: "",
  animatedBG: true,
  workspaceProperties: {
    name: "undefined",
    overlayIds: [],
    previewWindowDimensions: { width: 0, height: 0 },
  },
};

export type UpdateWorkspaceAction = {
  workspaceId: WorkspaceId,
  workspaceProperties: WorkspaceProperties,
};

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspaceId: (state, action: PayloadAction<WorkspaceId>) => {
      state.workspaceId = action.payload;
    },
    setAnimatedBG: (state, action: PayloadAction<boolean>) => {
      state.animatedBG = action.payload;
    },
    updateWorkspace: (state, action: PayloadAction<UpdateWorkspaceAction>) => {
      state.workspaceId = action.payload.workspaceId;
      state.workspaceProperties = action.payload.workspaceProperties;
    },
  },
});

export const {
  setWorkspaceId,
  setAnimatedBG,
  updateWorkspace,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
