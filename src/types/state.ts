// To support enums https://stackoverflow.com/a/66939542
export * from "./state.d";

export enum CarStatus {
  Normal,
  Retired,
  InPit,
  OutLap,
  InLap,
  DidNotStart,
}

export enum BGStatusIndicatorModes {
  NormalNarrow, // "LAP" above "##/##" lap count.
  NormalWide, // "LAP" to the left of "##/##" lap count.
}

export enum BGTimingTowerModes {
  Hidden,   // Not on display.
  Minimum,  // Just the driver name abbrv.
  Leader,   // Leader timing.
  Interval, // Interval timing.
  FullName, // Displays full name.
}

export enum BGTimingTowerFocusedCarsMode {
  None,     // When no special treatments are made.
  Portrait, // When it shows the portrait of the driver.
}
