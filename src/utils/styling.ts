import { css }from "styled-components/macro";
import { clamp } from "lodash";

import { Corner, Fraction, Placement, Px, TransitionArgs } from "../types/style";
import { Seconds } from "../types/util";

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

/**
 * Takes in an array of transition properties, durations, delays, and timings
 * in a special interface and returns them into a format understood by CSS.
 * Includes a semi-colon as well.
 * @param propsArray
 * @returns
 */
export function commonTransition(propsArray: TransitionArgs[] = []) {
  if (propsArray.length === 0){
    return "";
  }

  return (
    "transition: "
    + propsArray.map(p => `
      ${p?.property ?? "all"} ${p?.duration ?? 1000}ms ${p?.timing ?? ""} ${p?.delay ?? 0}ms`,
    ).join(", ")
    + ";"
  );
}

/**
 * An extension and evolution of commonTransition() provides a way to define
 * transition configurations that can be differentiated by which direction
 * (opening or closing) that they're going and can even support additional
 * "shared" properties that are common in either direction.
 * @param open the (often visible) state of the element
 * @param openingPropsArray what transition props to use when "open" (opening)
 * @param closingPropsArray what transition props to use when "closed" (closing)
 * @param sharedPropsArray what transition props to use in either direction
 * @returns
 */
export function commonDirectionalTransition(
  open: boolean,
  openingPropsArray: TransitionArgs[] = [],
  closingPropsArray: TransitionArgs[] = [],
  sharedPropsArray: TransitionArgs[] = [],
) {
  return open
    ? commonTransition(openingPropsArray.concat(sharedPropsArray))
    : commonTransition(closingPropsArray.concat(sharedPropsArray));
}

/**
 * Provides the x, y coordinates of a six point polygon for use in a clip-path
 * mask. By taking a fraction to indicate the progress through the animation it
 * will return the six coordinates that will generate a wipe effect.
 * @param width element width in pixels
 * @param height element height in pixels
 * @param progress fraction from 0 to 1
 * @param outlineThickness the expected max width of the outline
 * @param interiorThickness the expected max width of the outline internally
 * @returns
 */
export function outlineClipPath(
  width: Px,
  height: Px,
  progress: Fraction,
  outlineThickness: Px,
  interiorThickness: Px = 0,
): [[Px, Px], [Px, Px], [Px, Px], [Px, Px], [Px, Px], [Px, Px]] {
  const travelDistance = width * 2 + height;
  const pt1End = width / travelDistance;
  const pt2End = (width + height) / travelDistance;

  // Part 1: Reveal the bottom line.
  if (progress <= pt1End) {
    const x = width * progress / pt1End;
    return [
      [0, height - interiorThickness],
      [0, height - interiorThickness],
      [0, height - interiorThickness],
      [x, height - interiorThickness],
      [x, height + outlineThickness],
      [0, height + outlineThickness],
    ];

    // Part 2: Reveal the right line.
  } else if (progress > pt1End && progress <= pt2End) {
    const y = height - (height + outlineThickness) * ((progress - pt1End) / (pt2End - pt1End));
    return [
      [0, height - interiorThickness],
      [width - Math.max(10, interiorThickness), height - interiorThickness],
      [width - interiorThickness, y],
      [width + outlineThickness, y],
      [width + outlineThickness, height + outlineThickness],
      [0, height + outlineThickness],
    ];

    // Part 3: Reveal the top line.
  } else {
    const x = width - width * ((progress - pt2End) / (1 - pt2End));
    return [
      [0, height - interiorThickness],
      [x - Math.max(10, interiorThickness), height - interiorThickness],
      [x - interiorThickness, -outlineThickness],
      [width + outlineThickness, -outlineThickness],
      [width + outlineThickness, height + outlineThickness],
      [0, height + outlineThickness],
    ];
  }
}

/**
 * Converts amount of seconds that are over the limit to become a new format:
 * If limit is 60, then 65.322 will become "1:05.322".
 * You can set the limit to other than 60 to change the time when the new format
 * is used.
 * @param time Time to format given in seconds
 * @param limit Bounds (exclusive) that will keep the format in seconds.
 * @returns
 */
export function formatTime(time: Seconds, limit: Seconds) {
  if (time < limit) {
    return String(time.toFixed(3));
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toFixed(3).padStart(6, "0")}`;
}
