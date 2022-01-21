import { ReactNode } from "react";
import { WorkspaceId, WorkspaceProperties } from "../../types/state";

// Broadcast Graphics
import { ChyronDriverBasic } from "../../components/BroadcastGraphics/Chyrons/Driver";

type WorkspaceObject = {
  [id: WorkspaceId]: WorkspaceProperties,
};
export const workspaces: WorkspaceObject = {
  chyronDriverBasic: {
    name: "Chyron Driver Basic",
    overlayIds: [
      "chyron-driver-basic-full.png",
      "chyron-driver-basic-opening-1.png",
      "chyron-driver-basic-opening-2.png",
    ],
    previewWindowDimensions: {
      width: 650,
      height: 200,
    },
  },
};

export function fetchBroadcastGraphic(workspaceId: WorkspaceId): ReactNode {
  switch(workspaceId) {
  case "chyronDriverBasic": return ChyronDriverBasic();
  default: return null;
  }
}

