import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrototypeState, RootState, WorkspaceId, WorkspaceProperties } from "../../types/state";
import { Fraction } from "../../types/style";

const initialState: RootState["workspace"] = {
  workspaceId: "",
  animatedBG: true,
  darkBG: false,
  debugDurationMultiplier: 1.0,
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
    setDarkBG: (state, action: PayloadAction<boolean>) => {
      state.darkBG = action.payload;
    },
    setDebugDurationMultiplier: (state, action: PayloadAction<Fraction>) => {
      state.debugDurationMultiplier = action.payload;
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
          mode: "portraitFlag",
          subMode: "1",
          showBG: true,
          wipeStartingCorner: "bottomRight",
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
  setDarkBG,
  setDebugDurationMultiplier,
  updateWorkspace,
  updateAngledFlagCountry,
  updateAngledFlagTeam,
  updateVenetianTransition,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
