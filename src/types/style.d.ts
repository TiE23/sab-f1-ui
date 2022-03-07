/**
 * Type to remind you that we're dealing with pixels.
 */
export type Px = number;

/**
 * Type to remind you that we're dealing with percentages (100 = 100%).
 */
export type Percent = number;

/**
 * Type to remind you that we're dealing with fraction (0-1).
 */
export type Fraction = number;

/**
 * Type to remind you that we're dealing with degrees (0-360, etc).
 */
export type Degrees = number;

/**
 * Object to cleanly define relative/absolute placement for a styled component.
 */
export interface Placement {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

/**
 * Useful to initialize movements from.
 */
export type Corner = "topLeft" | "topRight" | "bottomRight" | "bottomLeft";


export interface TransitionArgs {
  property?: string,
  duration?: Milliseconds,
  timing?: string
  delay?: Milliseconds,
}

export type DebugDurationProps = {
  debugDurationMultiplier?: Fraction,
};
export type OpenProps = {
  open: boolean,
};
export type TransitionProps = OpenProps & {
  transitionProps?: TransitionArgs[],
};
export type DirectionalTransitionProps = TransitionProps & {
  transitionOpeningProps?: TransitionArgs[],
  transitionClosingProps?: TransitionArgs[],
}
