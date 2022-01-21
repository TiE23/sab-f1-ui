export type RootState = {
  pageDimensions: PageDimensions,
  workspace: Workspace,
  overlayTool: OverlayTool,
};

// Page Dimensions
export type PageDimensions = {
  mainMenu: Dimensions,
  app: Dimensions,
  workspace: Dimensions,
};
export type Dimensions = { width: number, height: number };

// Workspace
export type Workspace = {
  workspaceId: WorkspaceId,
  animatedBG: boolean,
  workspaceProperties: WorkspaceProperties,
};

export type WorkspaceId = string;
export type WorkspaceProperties = {
  name: string,
  overlayIds: OverlayIds,
  previewWindowDimensions: Dimensions,
};

// Overlay Tool
export type OverlayTool = {
  currentWorkspaceId: WorkspaceId,
  overlayIds: OverlayIds,
  currentOverlayId: OverlayId | null,
  currentOverlayItem: OverlayItem | null,
  visible: boolean,
};
export type OverlayId = string;
export type OverlayIds = Array<OverlayId>;
export type OverlayPosition = { x: number, y: number };
export type OverlayItem = {
  position: OverlayPosition,
  opacity: number,
};

// Race State.
export type Car = {
  position: number,
  driver: Driver,
  // status: ???,
  // distance: number,
};
export type Grid = Array<Car>;
export type Driver = {
  id: DriverId,
  firstName: string,
  lastName: string,
  number: number,
  team: Team,
  yellowTCam: boolean,
  initials: string,
  nationality: string,  // ISO 3166-1 alpha-3 codes
};
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

export type Team = {
  id: TeamId,
  shortName: TeamShortName,
  fullName: TeamFullName,
  nationality: string,  // ISO 3166-1 alpha-3 codes
  // logo: string,
};
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
