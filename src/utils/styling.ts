import { css }from "styled-components/macro";
import { clamp } from "lodash";

import { Corner, Fraction, Percent, Placement, Px, TransitionArgs } from "../types/style";
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
 * Call to create a function that can be re-used to generate a pair of percent
 * values to use on a clip-path.
 * This was necessary to deal with double-applied scaling issues when using
 * element measurement hooks.
 * @param width the width of the element to be clipped in pixels
 * @param height the height of the element to be clipped in pixels
 * @returns A function that can be used to convert pixel values into percent values
 */
const clipConvertToPercent = (width: Px, height: Px) =>
  ([x, y]: [Px, Px]): [Percent, Percent] => [x / width * 100, y / height * 100];

/**
 * Provides the x, y coordinates of a three point polygon for use in a clip-path
 * mask. By taking a fraction to indicate the progress through the animation it
 * will return the six coordinates that will generate a wipe effect.
 * @param width element width in pixels
 * @param height element height in pixels
 * @param progress fraction from 0 to 1
 * @param startingCorner Which corner the wipe originates from
 * @param degrees The angle in degrees of the wipe
 * @returns Array of three pairs of percentages to the coordinates of the clip-path
 */
export function wipeCustomDegClip(
  width: Px,
  height: Px,
  progress: Fraction,
  startingCorner: Corner,
  degrees: number,
): [[Percent, Percent], [Percent, Percent], [Percent, Percent]] {
  const tangent = Math.tan(clamp(degrees, 0.01, 90) * Math.PI / 180);
  const convert = clipConvertToPercent(width, height);

  switch (startingCorner) {
  case "topLeft":
    return [
      convert([0, 0]),
      convert([(width + height / tangent) * progress, 0]),
      convert([0, (height + width * tangent) * progress ]),
    ];
  case "topRight":
    return [
      convert([width, 0]),
      convert([width, (height + width * tangent) * progress]),
      convert([width - (width + height / tangent) * progress, 0]),
    ];
  case "bottomRight":
    return [
      convert([width, height]),
      convert([width, height - (height + width * tangent) * progress]),
      convert([width - (width + height / tangent) * progress, height]),
    ];
  case "bottomLeft":
    return [
      convert([0, height]),
      convert([0, height - (height + width * tangent) * progress]),
      convert([(width + height / tangent) * progress, height]),
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
 * @returns Array of six pairs of percentages to the coordinates of the clip-path
 */
export function outlineClipPath(
  width: Px,
  height: Px,
  progress: Fraction,
  outlineThickness: Px,
  interiorThickness: Px = 0,
): [
  [Percent, Percent],
  [Percent, Percent],
  [Percent, Percent],
  [Percent, Percent],
  [Percent, Percent],
  [Percent, Percent],
] {
  const travelDistance = width * 2 + height;
  const pt1End = width / travelDistance;
  const pt2End = (width + height) / travelDistance;
  const convert = clipConvertToPercent(width, height);

  // Part 1: Reveal the bottom line.
  if (progress <= pt1End) {
    const x = width * progress / pt1End;
    return [
      convert([0, height - interiorThickness]),
      convert([0, height - interiorThickness]),
      convert([0, height - interiorThickness]),
      convert([x, height - interiorThickness]),
      convert([x, height + outlineThickness]),
      convert([0, height + outlineThickness]),
    ];

    // Part 2: Reveal the right line.
  } else if (progress > pt1End && progress <= pt2End) {
    const y = height - (height + outlineThickness) * ((progress - pt1End) / (pt2End - pt1End));
    return [
      convert([0, height - interiorThickness]),
      convert([width - Math.max(10, interiorThickness), height - interiorThickness]),
      convert([width - interiorThickness, y]),
      convert([width + outlineThickness, y]),
      convert([width + outlineThickness, height + outlineThickness]),
      convert([0, height + outlineThickness]),
    ];

    // Part 3: Reveal the top line.
  } else {
    const x = width - width * ((progress - pt2End) / (1 - pt2End));
    return [
      convert([0, height - interiorThickness]),
      convert([x - Math.max(10, interiorThickness), height - interiorThickness]),
      convert([x - interiorThickness, -outlineThickness]),
      convert([width + outlineThickness, -outlineThickness]),
      convert([width + outlineThickness, height + outlineThickness]),
      convert([0, height + outlineThickness]),
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

/**
 * Given a frame to work within, this will return the dimensions of an element
 * that will best fit into this given frame with a specific ratio.
 * @param frameWidth Width of the working frame in pixels
 * @param frameHeight Width of the working frame in pixels
 * @param ratioWH Ratio in the form of [width, height]
 * @returns Dimensions [width, height] of a fitted element in pixels
 */
export function calculateFitSize(frameWidth: Px, frameHeight: Px, ratioWH: [number, number]): [Px, Px] {
  const [w, h] = ratioWH;
  let scaledWidth = frameWidth;
  let scaledHeight = frameHeight;

  if ((frameWidth / frameHeight) > (w / h)) { // Wider frame.
    scaledWidth = frameHeight / h * w;
  } else if ((frameWidth / frameHeight) < (w / h)) {  // Narrower frame.
    scaledHeight = frameWidth / w * h;
  }
  return [scaledWidth, scaledHeight];
}

/**
 * Given a fit element's dimensions in pixels this take the provided reference
 * width and height defined in pixels and return the scale the fitted element
 * is currently at.
 * @param fitWidth Width of the fitted element in pixels
 * @param fitHeight Height of the fitted element in pixels
 * @param referenceWH Dimensions that we need to be scaled to [width, height] in pixels
 * @returns Scale of the fitted element as a fraction
 */
export function calculateScale(fitWidth: Px, fitHeight: Px, referenceWH: [Px, Px]): Fraction {
  return (fitWidth / referenceWH[0] + fitHeight / referenceWH[1]) / 2;
}
