import { random } from "lodash";
import { Car, Grid } from "../types/state";

import { Meters } from "../types/util";

export function timeDiff(
  front: Meters,
  back: Meters,
) {
  /**
   * Spa length in 2020 was 308,052m. Hamilton won it in 1:24:08.761.
   * That's 3600 + 1440 + 8.761 = 5,048.761 seconds.
   * 61.015 m/s average. So, let's do that.
   */

  return random(0.95, 1.05) * ((front - back) / 61.015);
}


export function getCarAtPos(
  grid: Grid,
  targetPosition: number,
): Car {
  const foundCar = grid.find(car => car.position === targetPosition);
  if (!foundCar) {
    return grid[0];
  }
  return foundCar;
}
