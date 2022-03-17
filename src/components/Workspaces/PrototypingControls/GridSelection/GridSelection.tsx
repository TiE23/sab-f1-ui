import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { useDispatch, useSelector } from "react-redux";

import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";
import { pushSelectedCars, clearSelectedCars, removeSelectedCars } from "../../../../features/broadcast/director/broadcastDirectorSlice";
import { eventSelector } from "../../../../features/event/eventSelector";
import { GridSpot } from "../../../../types/state";

import { DriverLabel, GridItem, SelectionLabel } from "./styles";

export function GridSelection() {
  const dispatch = useDispatch();
  const {
    grid,
  } = useSelector(eventSelector);
  const {
    selectedCars,
  } = useSelector(broadcastDirectorSelector);

  const carClick = (gridSpot: GridSpot, selected: boolean) => () => {
    if (selected) {
      dispatch(removeSelectedCars(gridSpot));
    } else {
      dispatch(pushSelectedCars(gridSpot));
    }
  };
  const carDoubleClick = (gridSpot: GridSpot) => () => {
    dispatch(clearSelectedCars(gridSpot));
  };

  return (
    <InlineCluster gutter="xs">
      {grid.map((car, gridSpot) => {
        const selectedIndex = selectedCars.findIndex(g => g === gridSpot);
        const selected = selectedIndex !== -1;
        const onClick = carClick(gridSpot, selected);
        const onDoubleClick = carDoubleClick(gridSpot);
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
