import { OverlayIds } from "../../types/state";

export type WorkspaceObject = {
  [id: string]: {
    name: string,
    overlayIds: OverlayIds,
  },
};
export const workspaceObject: WorkspaceObject = {
  workspace1: {
    name: "Workspace 1",
    overlayIds: ["red", "blue", "white"],
  },
  workspace2: {
    name: "Workspace 2",
    overlayIds: ["green"],
  },
  workspace3: {
    name: "Workspace 3",
    overlayIds: ["green"],
  },
  workspace4: {
    name: "Workspace 4 has a longer name than the rest",
    overlayIds: ["green"],
  },
  blah0: { name: "blah", overlayIds: ["green"] },
  blah1: { name: "blah", overlayIds: ["green"] },
  blah2: { name: "blah", overlayIds: ["green"] },
  blah3: { name: "blah", overlayIds: ["green"] },
  blah4: { name: "blah", overlayIds: ["green"] },
  blah5: { name: "blah", overlayIds: ["green"] },
  blah6: { name: "blah", overlayIds: ["green"] },
  blah7: { name: "blah", overlayIds: ["green"] },
  blah8: { name: "blah", overlayIds: ["green"] },
  blah9: { name: "blah", overlayIds: ["green"] },
  blah10: { name: "blah", overlayIds: ["green"] },
  blah11: { name: "blah", overlayIds: ["green"] },
  blah12: { name: "blah", overlayIds: ["green"] },
  blah13: { name: "blah", overlayIds: ["green"] },
  blah14: { name: "blah", overlayIds: ["green"] },
  blah15: { name: "blah", overlayIds: ["green"] },
  blah16: { name: "blah", overlayIds: ["green"] },
  blah17: { name: "blah", overlayIds: ["green"] },
  blah18: { name: "blah", overlayIds: ["green"] },
  blah19: { name: "blah", overlayIds: ["green"] },
  blah20: { name: "blah", overlayIds: ["green"] },
  blah21: { name: "blah", overlayIds: ["green"] },
  blah22: { name: "blah", overlayIds: ["green"] },
  blah23: { name: "blah", overlayIds: ["green"] },
  blah24: { name: "blah", overlayIds: ["green"] },
  blah25: { name: "blah", overlayIds: ["green"] },
  blah26: { name: "blah", overlayIds: ["green"] },
  blah27: { name: "blah", overlayIds: ["green"] },
  blah28: { name: "blah", overlayIds: ["green"] },
  blah29: { name: "blah", overlayIds: ["green"] },
};

