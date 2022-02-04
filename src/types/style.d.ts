/**
 * Type to remind you that we're dealing with pixels.
 */
export type Px = number;

/**
 * Type to remind you that we're dealing with percentages (100 = 100%).
 */
export type Percent = number;

/**
 * Object to cleanly define relative/absolute placement for a styled component.
 */
export interface Placement {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
