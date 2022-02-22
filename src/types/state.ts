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
  trackLength: Meters;
  courseStatus: CourseStatus;
  mode: EventMode;
  progress: EventProgress;
  leaderGridSpot: GridSpot;
  grid: Grid;
  // gridPositions: GridSpot[];
  lastUpdate: number;
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
  courseFlag: CourseFlag;
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
export type GridSpot = number;
export interface Car {
  position: number;
  driver: Driver;
  status: CarStatus;
  tyre: Tyre;
  // flags: ???, // blue, red, meatball, black/white, black
  notices: CarNotice[];
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

export enum CarStatus {
  Normal,
  OnGrid,
  Finished,
  Retired,
  InPit,
  OutLap,
  InLap,
  DidNotStart,
}

export enum CarNotice {
  FastestLap,
  BlueFlag,
  BlackAndWhiteFlag,
  BlackFlag,
  BlackWithOrangeCircleFlag,
  UnderInvestigation,
  PenaltyDriveThrough,
  Penalty5Seconds,
  Penalty10Seconds,
  Penalty10SecondsStopGo,
}

export interface Tyre {
  compound: TyreCompound,
  age: number,
  new: boolean,
}
export enum TyreCompound {
  Soft,
  Medium,
  Hard,
  Wet,
  Intermediate,
}


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
export enum BGStatusIndicatorModes {
  NormalNarrow, // "LAP" above "##/##" lap count.
  NormalWide, // "LAP" to the left of "##/##" lap count.
}

// Timing Tower
export interface BGTimingTower {
  open: OpenState;
  displayMode: BGTimingTowerDisplayModes;
  splitsMode: BGTimingTowerSplitsMode,
  focusedCars: Car[],
  focusedCarsMode: BGTimingTowerFocusedCarsMode,
}
export enum BGTimingTowerDisplayModes {
  Hidden,
  LeftOnly,
  LeftAndRight,
  FullLeft,
}
export enum BGTimingTowerSplitsMode {
  Leader,   // Leader timing.
  Interval, // Interval timing.
}
export enum BGTimingTowerFocusedCarsMode {
  None,     // When no special treatments are made.
  Portrait, // When it shows the portrait of the driver.
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

export interface BGChyronDriver {
  car: Car;
  flagMode: FlagMode;
  showPosFlag: boolean;
  showDriverNumber: boolean;
  showPortrait: boolean;
}
export type FlagMode = "country" | "team" | "none";
