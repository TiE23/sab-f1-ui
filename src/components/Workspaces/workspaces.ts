import { Dimensions, OverlayIds } from "../../types/state";

export type WorkspaceObject = {
  [id: string]: {
    name: string,
    overlayIds: OverlayIds,
    previewWindowDimensions: Dimensions,
  },
};
export const workspaceObject: WorkspaceObject = {
  chyronSimple: {
    name: "Chyron Simple",
    overlayIds: [
      "chyron-simple-full.png",
      "chyron-simple-opening-1.png",
      "chyron-simple-opening-2.png",
    ],
    previewWindowDimensions: {
      width: 650,
      height: 200,
    },
  },
};

