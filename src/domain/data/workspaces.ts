import { WorkspaceId, WorkspaceProperties } from "../../types/state";

type WorkspaceObject = {
  [id: WorkspaceId]: WorkspaceProperties,
};
export const workspaces: WorkspaceObject = {
  chyronDriver: {
    name: "Chyron Driver",
    overlayIds: [
      "chyron-driver-medium-full-ham.png",
      "chyron-driver-medium-full-alo.png",
      "chyron-driver-medium-full-lec.png",
      "chyron-driver-medium-full-rai.png",
      "chyron-driver-medium-full-vet.png",
      "chyron-driver-medium-full-per.png",
      "chyron-driver-medium-full-msc.png",
      "chyron-driver-medium-full-gas-weird.png",
      "chyron-driver-medium-full-nor-weird.png",
      "chyron-driver-medium-full-lat-no-pos.png",
      "chyron-driver-medium-op1-ham.png",
      "chyron-driver-medium-op2-ham.png",
      "chyron-driver-large-np-tsu.png",
      "chyron-driver-large-dnf-ver.png",
    ],
    previewWindowDimensions: {
      width: 750,
      height: 300,
    },
  },
  angledFlag: {
    name: "Angled Flag",
    overlayIds: [
      "angled-flag-gbr.png",
    ],
    previewWindowDimensions: {
      width: 800,
      height: 500,
    },
  },
};
