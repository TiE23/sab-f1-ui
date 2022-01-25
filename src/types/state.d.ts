export interface RootState {
  pageDimensions: PageDimensions;
  workspace: Workspace;
  overlayTool: OverlayTool;
}

// Page Dimensions
export interface PageDimensions {
  mainMenu: Dimensions;
  app: Dimensions;
  workspace: Dimensions;
}
export interface Dimensions { width: number; height: number; }

// Workspace
export interface Workspace {
  workspaceId: WorkspaceId;
  animatedBG: boolean;
  workspaceProperties: WorkspaceProperties;
}

export type WorkspaceId = string;
export interface WorkspaceProperties {
  name: string;
  overlayIds: OverlayIds;
  previewWindowDimensions: Dimensions;
}

// Overlay Tool
export interface OverlayTool {
  currentWorkspaceId: WorkspaceId;
  overlayIds: OverlayIds;
  currentOverlayId: OverlayId | null;
  currentOverlayItem: OverlayItem | null;
  visible: boolean;
}
export type OverlayId = string;
export type OverlayIds = Array<OverlayId>;
export interface OverlayPosition { x: number; y: number; }
export interface OverlayItem {
  position: OverlayPosition;
  opacity: number;
}

// Race State.
export interface Car {
  position: number;
  driver: Driver;
  // status: ???;
  // distance: number;
}
export type Grid = Array<Car>;
export interface Driver {
  id: DriverId;
  firstName: string;
  lastName: string;
  number: number;
  team: Team;
  yellowTCam: boolean;
  initials: string;
  nationality: string;  // ISO 3166-1 alpha-3 codes
}
export type DriverId =
  | "albon"
  | "alonso"
  | "bottas"
  | "gasly"
  | "giovinazzi"
  | "hamilton"
  | "kubica"
  | "latifi"
  | "leclerc"
  | "mazepin"
  | "norris"
  | "ocon"
  | "perez"
  | "raikkonen"
  | "ricciardo"
  | "russell"
  | "sainz"
  | "schumacher"
  | "stroll"
  | "tsunoda"
  | "verstappen"
  | "vettel"
  | "zhou";

export interface Team {
  id: TeamId;
  shortName: TeamShortName;
  fullName: TeamFullName;
  nationality: string;  // ISO 3166-1 alpha-3 codes
  // logo: string;
}
export type TeamId =
  | "alfaRomeo"
  | "alphaTauri"
  | "alpine"
  | "astonMartin"
  | "ferrari"
  | "haas"
  | "mclaren"
  | "mercedes"
  | "redBull"
  | "williams";
export type TeamShortName =
  | "Alfa Romeo"
  | "AlphaTauri"
  | "Alpine"
  | "Aston Martin"
  | "Ferrari"
  | "Haas F1 Team"
  | "McLaren"
  | "Mercedes"
  | "Red Bull Racing"
  | "Williams";
export type TeamFullName =
  | "Alfa Romeo F1 Team ORLEN"
  | "Scuderia AlphaTauri"
  | "Alpine F1 Team"
  | "Aston Martin Cognizant Formula One Team"
  | "Scuderia Ferrari"
  | "Uralkali Haas F1 Team"
  | "McLaren F1 Team"
  | "Mercedes-AMG Petronas Formula One Team"
  | "Red Bull Racing"
  | "Williams Racing";

// Broadcast Graphics
export interface BGRelativePos {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
export interface BroadcastGraphics {
  // timingBoard: BGTimingBoard;
  // statusIndicator: BGStatusIndicator;
  // indicators: BGIndicators
  chyrons: BGChyrons;
  // gems: BGGems
  // toasts: BGToasts;
}

export interface BGChyrons {
  primary: BGChyron;
  secondary: BGChyron;
  // sponsorGem: BGSponsorGem;
}

export type FlagMode = "country" | "team";
export type BGChyronMode =
  | "driver-basic-small"
  | "driver-basic-medium"
  | "driver-basic-large";
export interface BGChyron extends BGRelativePos {
  mode: BGChyronMode;
  cars: Array<Car>;
}
export interface BGChyronMedium extends BGChyron {
  mode: "driver-basic-medium";
  flag: FlagMode;
  showPosFlag: boolean;
  showDriverNumber: boolean;
}

