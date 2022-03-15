import { keys } from "lodash";

import { BGChyronSubMode, BGChyronMode, FlagMode } from "../../types/state";
import { Placement } from "../../types/style";

// Chyrons Section
const chyronsData: {
  [mode: BGChyronMode]: {
    placement: Placement,
    subModes: {
      [subMode: BGChyronSubMode]: Record<string, unknown>,
    },
  },
} = {
  driver: {
    placement: { top: "0", right: "0", bottom: "0", left: "0" },
    subModes: {
      medium: { width: 582, height: 72 },
      large: { width: 638, height: 98 },
    },
  },
};

export const flagModeList: Array<FlagMode> = ["country", "team", "none"];

export function getChyronModesList(): Array<BGChyronMode> {
  return keys(chyronsData);
}

export function getChyronRelativePos(mode: BGChyronMode): Placement {
  return chyronsData[mode]?.placement
    ?? { top: "0", right: "0", bottom: "0", left: "0" };
}

export function getChyronSubModesList(mode: BGChyronMode): Array<BGChyronSubMode> {
  return keys(chyronsData[mode]?.subModes ?? {});
}

export function getChyronSubModeProps(
  mode: BGChyronMode,
  subMode: BGChyronSubMode,
): Record<string, unknown> {
  return chyronsData[mode]?.subModes[subMode] ?? {};
}
