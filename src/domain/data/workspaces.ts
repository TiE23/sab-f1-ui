import { WorkspaceId, WorkspaceProperties } from "../../types/state";

type WorkspaceObject = {
  [id: WorkspaceId]: WorkspaceProperties,
};
export const workspaces: WorkspaceObject = {
  chyron: {
    name: "Chyron",
    overlayIds: [
      "chyron-driver-medium-full-alo.png",
      "chyron-driver-medium-full-lec.png",
      "chyron-driver-medium-full-rai.png",
      "chyron-driver-medium-full-vet.png",
      "chyron-driver-medium-full-per.png",
      "chyron-driver-medium-full-msc.png",
      "chyron-driver-medium-op0-ham.png",
      "chyron-driver-medium-op1-ham.png",
      "chyron-driver-medium-op2-ham.png",
      "chyron-driver-medium-full-ham.png",
      "chyron-driver-portrait-maz.png",
      "chyron-driver-medium-full-gas-weird.png",
      "chyron-driver-medium-full-nor-weird.png",
      "chyron-driver-medium-full-lat-no-pos.png",
      "chyron-driver-large-np-tsu.png",
      "chyron-driver-large-dnf-ver.png",
    ],
    previewWindowDimensions: {
      width: 750,
      height: 400,
    },
  },
  chyronWide: {
    name: "Chyron (Wide)",
    overlayIds: [
      "chyron-driver-medium-full-sai-ric.png",
    ],
    previewWindowDimensions: {
      width: 1200,
      height: 250,
    },
  },
  angledFlagCountry: {
    name: "Angled Flag (Country)",
    overlayIds: [
      "angled-flag-gbr.png",
    ],
    previewWindowDimensions: {
      width: 800,
      height: 500,
    },
  },
  angledFlagTeam: {
    name: "Angled Flag (Team)",
    overlayIds: [
      "angled-flag-alfaRomeo.png",
      "angled-flag-alphaTauri.png",
      "angled-flag-alpine.png",
      "angled-flag-astonMartin.png",
      "angled-flag-ferrari.png",
      "angled-flag-haas.png",
      "angled-flag-mclaren.png",
      "angled-flag-mercedes.png",
      "angled-flag-redBull.png",
      "angled-flag-williams.png",
    ],
    previewWindowDimensions: {
      width: 800,
      height: 500,
    },
  },
  venetianTransition: {
    name: "Venetian Transition",
    overlayIds: [
      "venetian-pos-1.png",
      "venetian-pos-2.png",
      "venetian-pos-3.png",
      "venetian-pos-4.png",
      "venetian-pos-5.png",
      "venetian-pos-6.png",
      "venetian-pos-7.png",
    ],
    previewWindowDimensions: {
      width: 700,
      height: 500,
    },
  },
  timingBoard: {
    name: "Timing Board",
    overlayIds: [
      "timing-board-leader-19.png",
      "timing-board-leader-20-out-1.png",
      "timing-board-intervals-yellow-flag.png",
      "timing-board-portrait-gap.png",
    ],
    previewWindowDimensions: {
      width: 700,
      height: 900,
    },
  },
};
