import { css }from "styled-components";

import { Fraction, Placement, Px } from "../types/style";

export function placementStyleRules(pos: Placement) {
  return css`
    ${pos.top ? `top: ${pos.top};` : ""}
    ${pos.right ? `right: ${pos.right};` : ""}
    ${pos.bottom ? `bottom: ${pos.bottom};` : ""}
    ${pos.left ? `left: ${pos.left};` : ""}
  `;
}


/**
 * Provides the x, y coordinates of a three point polygon for use in a clip-path
 * mask. By taking a fraction to indicate the progress through the animation it
 * will return the six coordinates that will generate a 45 degree wipe effect.
 * @param width element width in pixels
 * @param height element height in pixels
 * @param progress fraction from 0 to 1
 * @param startingCorner Which corner the wipe originates from
 * @returns Array of six numbers representing pixel values of the clip-path
 */
export function wipe45DegClip(
  width: Px,
  height: Px,
  progress: Fraction,
  startingCorner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft",
): [Px, Px, Px, Px, Px, Px] {
  // Long edge multiplied by 2.
  const l = Math.max(width, height) * 2;

  switch(startingCorner) {
  case "topLeft":
    return [
      0, 0,
      l * progress, 0,
      0, l * progress,
    ];
  case "topRight":
    return [
      width, 0,
      width, l * progress,
      width - l * progress, 0,
    ];
  case "bottomRight":
    return [
      width, height,
      width, height - l * progress,
      width - l * progress, height,
    ];
  case "bottomLeft":
    return [
      0, height,
      0, height - l * progress,
      l * progress, height,
    ];
  }
}
