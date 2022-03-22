import { Car, CarStatus, Grid } from "../types/state";

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

  return (front - back) / 61.015;
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

/**
 * Helper function returns a map of driver ids to their index in the Grid. This
 * removes the need for repeating find functions over and over again when making
 * bulk changes to a list of cars.
 * @param grid Master list of cars
 * @returns
 */
export function driverToGridMap(grid: Grid) {
  const gridMap: { [driverId: string]: number } = {};
  grid.forEach((car, index) => {
    gridMap[car.driver.id] = index;
  });
  return gridMap;
}


// Adds distance to the cars that are out of the race.
function outPosition(status: CarStatus) {
  if (status === CarStatus.Retired) {
    return -1000000;
  } else if (status === CarStatus.DidNotStart) {
    return -2000000;
  }
  return 0;
}

export function sortCarPosition(a: Car, b: Car): number {
  return (b.distance + outPosition(b.status))
    - (a.distance + outPosition(a.status));
}
