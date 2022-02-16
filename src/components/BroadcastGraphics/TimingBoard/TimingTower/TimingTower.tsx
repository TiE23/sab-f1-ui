import { useSelector } from "react-redux";
import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";

import { eventSelector } from "../../../../features/event/eventSelector";
import { BGTimingTowerModes, Car, CarStatus } from "../../../../types/state";
import { orMatch } from "../../../../utils/common";
import { PositionFlag } from "../../Common/PositionFlag";
import { Spacer } from "../../Common/Spacer.styled";

import {
  DriverName,
  RowContainer,
  RowLeftHalf,
  RowLeftHalfLayout,
  RowRightHalf,
  RowRightHalfLayout,
  RowsContainer,
} from "./styles";

type TimingTowerProps = {
  carsToDisplay?: number,
}
export function TimingTower({
  carsToDisplay = 20,
}: TimingTowerProps) {

  const { grid } = useSelector(eventSelector);
  const { timingBoard } = useSelector(broadcastGraphicsSelector);

  const runningCars: Car[] = [];
  const retiredCars: Car[] = [];

  grid.forEach((car, index) => {
    if (index >= carsToDisplay) return;
    if (car.status === CarStatus.Retired) {
      retiredCars.push(car);
    } else {
      runningCars.push(car);
    }
  });

  const buildRow = (
    car: Car,
    index: number,
    count: number,
  ) => {
    const lastRow = index + 1 === count;

    return (
      <RowContainer
        key={car.driver.id}
        topGap={car.status === CarStatus.Retired && index === 0}
        retired={car.status === CarStatus.Retired}
        wide={timingBoard.timingTower.mode !== BGTimingTowerModes.Minimum}
      >
        <RowLeftHalf
          roundedCorner={lastRow && orMatch(
            timingBoard.timingTower.mode,
            BGTimingTowerModes.Minimum,
            BGTimingTowerModes.FullName,
          )}
        >
          <RowLeftHalfLayout>
            <Spacer width="3px" />
            {car.status !== CarStatus.Retired && (
              <PositionFlag
                size={32}
                number={index + 1}  // Not using car.position...
              />
            )}
            <Spacer width="14px" />
            <DriverName>
              {car.driver.initials}
            </DriverName>
          </RowLeftHalfLayout>
        </RowLeftHalf>
        <RowRightHalf
          roundedCorner={lastRow && orMatch(
            timingBoard.timingTower.mode,
            BGTimingTowerModes.Leader,
            BGTimingTowerModes.Interval,
          )}
        >
          <RowRightHalfLayout>

          </RowRightHalfLayout>
        </RowRightHalf>
      </RowContainer>
    );
  };


  const rows = runningCars.map((car, index, cars) => buildRow(car, index, cars.length));
  rows.push(...retiredCars.map((car, index, cars) => buildRow(car, index, cars.length)));

  return (
    <RowsContainer>
      {rows}
    </RowsContainer>
  );
}
