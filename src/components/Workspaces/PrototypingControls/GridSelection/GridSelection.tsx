import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { findIndex } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";
import { selectedCarsAdd, selectedCarsClear, selectedCarsRemove } from "../../../../features/broadcast/director/broadcastDirectorSlice";
import { eventSelector } from "../../../../features/event/eventSelector";
import { Car } from "../../../../types/state";
import { carMatch } from "../../../../utils/comparators";

import { DriverLabel, GridItem, SelectionLabel } from "./styles";

export function GridSelection() {
  const dispatch = useDispatch();
  const {
    grid,
  } = useSelector(eventSelector);
  const {
    selectedCars,
  } = useSelector(broadcastDirectorSelector);

  const carClick = (car: Car, selected: boolean) => () => {
    if (selected) {
      dispatch(selectedCarsRemove(car));
    } else {
      dispatch(selectedCarsAdd(car));
    }
  };
  const carDoubleClick = (car: Car) => () => {
    dispatch(selectedCarsClear(car));
  };

  return (
    <InlineCluster gutter="xs">
      {grid.map(car => {
        const selectedIndex = findIndex(selectedCars, carMatch(car));
        const selected = selectedIndex !== -1;
        const onClick = carClick(car, selected);
        const onDoubleClick = carDoubleClick(car);
        return (
          <GridItem
            key={car.driver.id}
            selected={selected}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
          >
            <DriverLabel>
              {car.driver.initials}
            </DriverLabel>
            {selected && (
              <SelectionLabel>{selectedIndex + 1}</SelectionLabel>
            )}
          </GridItem>
        );
      })}
    </InlineCluster>
  );
}
