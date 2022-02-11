import { css }from "styled-components";
import { clamp } from "lodash";

import { Corner, Fraction, Placement, Px, TransitionArgs } from "../types/style";

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
 * will return the six coordinates that will generate a wipe effect.
 * @param width element width in pixels
 * @param height element height in pixels
 * @param progress fraction from 0 to 1
 * @param startingCorner Which corner the wipe originates from
 * @param degrees The angle in degrees of the wipe
 * @returns Array of six numbers representing pixel values of the clip-path
 */
export function wipeCustomDegClip(
  width: Px,
  height: Px,
  progress: Fraction,
  startingCorner: Corner,
  degrees: number,
): [[Px, Px], [Px, Px], [Px, Px]] {
  const tangent = Math.tan(clamp(degrees, 0.01, 90) * Math.PI / 180);

  switch (startingCorner) {
  case "topLeft":
    return [
      [0, 0],
      [(width + height / tangent) * progress, 0],
      [0, (height + width * tangent) * progress ],
    ];
  case "topRight":
    return [
      [width, 0],
      [width, (height + width * tangent) * progress],
      [width - (width + height / tangent) * progress, 0],
    ];
  case "bottomRight":
    return [
      [width, height],
      [width, height - (height + width * tangent) * progress],
      [width - (width + height / tangent) * progress, height],
    ];
  case "bottomLeft":
    return [
      [0, height],
      [0, height - (height + width * tangent) * progress],
      [(width + height / tangent) * progress, height],
    ];
  }
}

export function commonTransition(propsArray: TransitionArgs[]) {
  return (
    "transition: "
    + propsArray.map(p => `
      ${p?.property ?? "all"} ${p?.duration ?? 1000}ms ${p?.timing ?? ""} ${p?.delay ?? 0}ms
    `).join(", ")
    + ";"
  );
}

export function outlineClipPath(
  width: Px,
  height: Px,
  progress: Fraction,
  outlineThickness: Px,
): [[Px, Px], [Px, Px], [Px, Px], [Px, Px], [Px, Px], [Px, Px]] {
  const travelDistance = width * 2 + height;
  const pt1End = width / travelDistance;
  const pt2End = (width + height) / travelDistance;

  // Part 1: Reveal the bottom line.
  if (progress <= pt1End) {
    const x = width * progress / pt1End;
    return [
      [0, height],
      [0, height],
      [0, height],
      [x, height],
      [x, height + outlineThickness],
      [0, height + outlineThickness],
    ];

    // Part 2: Reveal the right line.
  } else if (progress > pt1End && progress <= pt2End) {
    const y = height - (height + outlineThickness) * ((progress - pt1End) / (pt2End - pt1End));
    return [
      [0, height],
      [width - 10, height],
      [width, y],
      [width + outlineThickness, y],
      [width + outlineThickness, height + outlineThickness],
      [0, height + outlineThickness],
    ];

    // Part 3: Reveal the top line.
  } else {
    const x = width - width * ((progress - pt2End) / (1 - pt2End));
    return [
      [0, height],
      [x - 10, height],
      [x, -outlineThickness],
      [width + outlineThickness, -outlineThickness],
      [width + outlineThickness, height + outlineThickness],
      [0, height + outlineThickness],
    ];
  }


  // return [

  // ]
}
