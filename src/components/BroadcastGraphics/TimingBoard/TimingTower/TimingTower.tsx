import { useSelector } from "react-redux";
import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";

import { eventSelector } from "../../../../features/event/eventSelector";
import { BGTimingTowerModes, Car, CarStatus } from "../../../../types/state";
import { Fraction } from "../../../../types/style";
import { orMatch } from "../../../../utils/common";
import { timeDiff } from "../../../../utils/event";
import { formatTime } from "../../../../utils/styling";
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
  TimeDiff,
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

  let forwardCarDistance = -1;

  const buildRow = (
    car: Car,
    index: number,
    count: number,
  ) => {
    const firstRow = index === 0;
    const lastRow = index + 1 === count;
    let rightHalfContent = "";
    let xScale: Fraction = 1.0;

    let leader = false;
    if (forwardCarDistance === -1) {
      leader = true;
      forwardCarDistance = car.distance;
    }
    if (leader) {
      rightHalfContent = timingBoard.timingTower.mode === BGTimingTowerModes.Leader
        ? "Leader" : timingBoard.timingTower.mode === BGTimingTowerModes.Interval
          ? "Interval" : "";
    } else if (car.status === CarStatus.Retired) {
      rightHalfContent = "OUT";
    } else {
      rightHalfContent = `+${formatTime(timeDiff(
        forwardCarDistance,
        car.distance,
      ), 60)}`;
      xScale = rightHalfContent.includes(".") && rightHalfContent.length > 7 ? 0.75 : 0.9;
    }

    if (timingBoard.timingTower.mode === BGTimingTowerModes.Interval) {
      forwardCarDistance = car.distance;
    }

    return (
      <RowContainer
        key={car.driver.id}
        topGap={car.status === CarStatus.Retired && firstRow}
        retired={car.status === CarStatus.Retired}
        wide={timingBoard.timingTower.mode !== BGTimingTowerModes.Minimum}
      >
        <RowLeftHalf
          roundedCornerBottom={
            lastRow && orMatch(
              timingBoard.timingTower.mode,
              BGTimingTowerModes.Minimum,
              BGTimingTowerModes.FullName,
            ) ? 5 : undefined
          }
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
          roundedCornerTop={
            index === 0 && car.status !== CarStatus.Retired
              ? 5 : undefined
          }
          roundedCornerBottom={
            lastRow && orMatch(
              timingBoard.timingTower.mode,
              BGTimingTowerModes.Leader,
              BGTimingTowerModes.Interval,
            ) ? 5 : undefined
          }
        >
          <RowRightHalfLayout>
            <TimeDiff xScale={xScale}>
              {rightHalfContent}
            </TimeDiff>
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
