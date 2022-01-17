import { WorkspaceProperties } from "../../types/state";

type WorkspaceObject = {
  [id: string]: WorkspaceProperties,
};
export const workspaces: WorkspaceObject = {
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

