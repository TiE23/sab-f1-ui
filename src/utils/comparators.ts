import { Car } from "../types/state";

export const carMatch = (targetCar: Car) => (checkedCar: Car) =>
  checkedCar.driver.id === targetCar.driver.id;
