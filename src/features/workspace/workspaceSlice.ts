import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, WorkspaceId } from "../../types/state";

const initialState: RootState["workspace"] = {
  workspaceId: "",
  animatedBG: true,
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
  },
});

export const { setWorkspaceId, setAnimatedBG } = workspaceSlice.actions;
export default workspaceSlice.reducer;
