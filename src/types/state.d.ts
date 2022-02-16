import { Meters, Milliseconds, Optional } from "./util";
import { Corner, Fraction } from "./style";

export interface RootState {
  pageDimensions: PageDimensions;
  workspace: Workspace;
  overlayTool: OverlayTool;
  event: Event,
  broadcastDirector: BroadcastDirector;
  broadcastGraphics: BroadcastGraphics;
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
  darkBG: boolean;
  debugDurationMultiplier: Fraction,
  workspaceProperties: WorkspaceProperties;
  prototypeState: PrototypeState;
}

export type WorkspaceId = string;
export interface WorkspaceProperties {
  name: string;
  overlayIds: OverlayIds;
  previewWindowDimensions: Dimensions;
}
export interface PrototypeState {
  angledFlagCountry?: {
    flagA: string;
    flagB: string;
  };
  angledFlagTeam?: {
    flagA: TeamId;
    flagB: TeamId;
  };
  venetianTransition?: {
    mode: string,
    subMode: string,
    showBG: boolean;
    wipeStartingCorner: Corner,
  };
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
export type OverlayIds = OverlayId[];
export interface OverlayPosition { x: number; y: number; }
export interface OverlayItem {
  position: OverlayPosition;
  opacity: number;
}

// Event State
export interface Event {
  trackName: string;
  courseStatus: CourseStatus;
  mode: EventMode;
  progress: EventProgress;
  grid: Grid;
}
export interface EventProgress {
  startTime: Milliseconds;
  timeLimit: Milliseconds;
  currentLap: number;
  lapCount: number;
}
export type EventMode =
  | "race"
  | "sprint"
  | "p1"
  | "p2"
  | "p3"
  | "q1"
  | "q2"
  | "q3";
export interface CourseStatus {
  courseFlag: CourseFlags;
  sectorFlags: CourseFlag[];
  safetyCar: SafetyCarStatus;
  virtualSafetyCar: VirtualSafetyCarStatus;
}
export type CourseFlag =
  | "green"
  | "yellow"
  | "doubleYellow"
  | "chequered"
  | "red"
  | "white"
  | "redYellow";
export type SafetyCarStatus = "clear" | "starting" | "out" | "ending";
export type VirtualSafetyCarStatus = "clear" | "out" | "ending";
export type Grid = Car[];  // Grid order does not change.
export interface Car {
  position: number;
  driver: Driver;
  status: CarStatus;
  // flags: ???, // blue, red, meatball, black/white, black
  // notices: ???; // Penalties, warnings, investigations, blue flags, etc
  distance: Meters;
}
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

// Broadcast Director
export interface BroadcastDirector {
  selectedCars: Car[];
}

// Broadcast Graphics
export interface BGRelativePos {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
export interface BGBaseState {
  relativePos: BGRelativePos;
  openState: OpenState;
}
/**
 * -1 closing, 0 closed, 1 open, 2... different states (for progressive anims)
 */
export type OpenState = number;

export interface BroadcastGraphics {
  timingBoard: BGTimingBoard;
  // indicators: BGIndicators
  chyrons: Optional<BGChyrons>;
  // gems: BGGems
  // toasts: BGToasts;
}

// Timing Board
export interface BGTimingBoard extends BGBaseState {
  statusIndicator: BGStatusIndicator;
  timingTower: BGTimingTower;
}

// Status Indicator
export interface BGStatusIndicator {
  mode: BGStatusIndicatorModes;
}

// Timing Tower
export interface BGTimingTower {
  open: OpenState;
  mode: BGTimingTowerModes;
  focusedCars: Car[],
  focusedCarsMode: BGTimingTowerFocusedCarsMode,
}


// Chyrons
export type BGChyronMode = string;
export type BGChyronSubMode = string;
export interface BGChyrons extends BGBaseState {
  mode: BGChyronMode;
  subMode: BGChyronSubMode;
  driver?: {
    primary: BGChyronDriver;
    secondary: Optional<BGChyronDriver>;
  }
  // sponsorGem: BGSponsorGem;
}

export interface BGChyronDriver extends BGChyron {
  car: Car;
  flagMode: FlagMode;
  showPosFlag: boolean;
  showDriverNumber: boolean;
  showPortrait: boolean;
}
export type FlagMode = "country" | "team" | "none";
