import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrototypeState, RootState, WorkspaceId, WorkspaceProperties } from "../../types/state";

const initialState: RootState["workspace"] = {
  workspaceId: "",
  animatedBG: true,
  workspaceProperties: {
    name: "undefined",
    overlayIds: [],
    previewWindowDimensions: { width: 0, height: 0 },
  },
  prototypeState: {},
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

    // Prototype States
    updateAngledFlagCountry: (
      state,
      action: PayloadAction<Partial<PrototypeState["angledFlagCountry"]>>,
    ) => {
      if (state.prototypeState.angledFlagCountry == null) {
        state.prototypeState.angledFlagCountry = {
          flagA: "GBR",
          flagB: "GBR",
        };
      }
      state.prototypeState.angledFlagCountry = Object.assign(
        state.prototypeState.angledFlagCountry,
        action.payload,
      );
    },
    updateAngledFlagTeam: (
      state,
      action: PayloadAction<Partial<PrototypeState["angledFlagTeam"]>>,
    ) => {
      if (state.prototypeState.angledFlagTeam == null) {
        state.prototypeState.angledFlagTeam = {
          flagA: "alfaRomeo",
          flagB: "alfaRomeo",
        };
      }
      state.prototypeState.angledFlagTeam = Object.assign(
        state.prototypeState.angledFlagTeam,
        action.payload,
      );
    },
    updateVenetianTransition: (
      state,
      action: PayloadAction<Partial<PrototypeState["venetianTransition"]>>,
    ) => {
      if (state.prototypeState.venetianTransition == null) {
        state.prototypeState.venetianTransition = {
          mode: "positionFlag",
          showBG: true,
          timing: 500,
          startingCorner: "topLeft",
        };
      }
      state.prototypeState.venetianTransition = Object.assign(
        state.prototypeState?.venetianTransition,
        action.payload,
      );
    },
  },
});

export const {
  setWorkspaceId,
  setAnimatedBG,
  updateWorkspace,
  updateAngledFlagCountry,
  updateAngledFlagTeam,
  updateVenetianTransition,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
