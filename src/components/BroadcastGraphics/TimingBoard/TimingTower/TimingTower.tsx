import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { eventSelector } from "../../../../features/event/eventSelector";
import { theme } from "../../../../shared/theme";
import {
  BGTimingTowerDisplayModes,
  BGTimingTowerSplitsMode,
  Car,
  CarNotice,
  CarStatus,
} from "../../../../types/state";
import { Fraction } from "../../../../types/style";
import { orMatch } from "../../../../utils/common";
import { getCarAtPos, timeDiff } from "../../../../utils/event";
import { formatTime } from "../../../../utils/styling";

import { PositionFlag } from "../../Common/PositionFlag";
import { TeamGem } from "../../Common/TeamGem";

import {
  DriverName,
  FastestLapGem,
  AnimatedRowContainer,
  RowLeftHalf,
  RowLeftHalfGemContainer,
  RowLeftHalfLayout,
  RowRightHalf,
  RowRightHalfLayout,
  RowsContainer,
  TimeDiff,
} from "./styles";


export function TimingTower() {

  const { lastUpdate, grid, trackLength, leaderGridSpot } = useSelector(eventSelector);
  const { timingBoard: { timingTower }, timingBoard: { timingTower: { splitsMode } } } = useSelector(
    broadcastGraphicsSelector,
  );

  const [startingCarsCount, setStartingCarsCount] = useState(0);
  const [retiredCarsCount, setRetiredCarsCount] = useState(0);
  const [rows, setRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Filter away cars that are marked as not starting so they don't appear.
    const startingGrid = grid.filter(car => car.status !== CarStatus.DidNotStart);
    setStartingCarsCount(startingGrid.length);

    let retiredCount = 0;
    startingGrid.forEach(car => {
      if (car.status === CarStatus.Retired) {
        ++retiredCount;
      }
    });
    setRetiredCarsCount(retiredCount);

    setRows(startingGrid.map((car, index, grid) =>
      buildRow(car, index, startingGrid.length, retiredCount)));
  }, [lastUpdate, splitsMode]);


  const buildRow = (
    car: Car,
    index: number,
    startingCarsCount: number,
    retiredCarsCount: number,
  ) => {
    const bottomRounded = car.status === CarStatus.Retired ? (
      car.position === startingCarsCount
    ) : (
      car.position === startingCarsCount - retiredCarsCount
    );

    let rightHalfContent = "";
    let xScale: Fraction = 1.0;
    let yScale: Fraction = 1.0;

    if (car.position === 1) {
      rightHalfContent = splitsMode === BGTimingTowerSplitsMode.Leader
        ? "Leader" : splitsMode === BGTimingTowerSplitsMode.Interval
          ? "Interval" : "";
    } else if (car.status === CarStatus.Retired) {
      rightHalfContent = "OUT";
    } else {
      const deltaCar = getCarAtPos(
        grid,
        splitsMode === BGTimingTowerSplitsMode.Leader ? 1 : car.position - 1,
      );

      const plusLaps = Math.floor((deltaCar.distance - car.distance) / trackLength);

      rightHalfContent =
      splitsMode === BGTimingTowerSplitsMode.Leader && plusLaps > 0
        ? `+${plusLaps} LAP${plusLaps > 1 ? "S" : ""}`
        : `+${formatTime(timeDiff(deltaCar.distance, car.distance), 60)}`;

      xScale = rightHalfContent.includes(":") ? 0.75 : 0.9;
      yScale = rightHalfContent.includes("+") ? 1.1 : 1.0;
    }

    return (
      <AnimatedRowContainer
        key={car.driver.id}
        retired={car.status === CarStatus.Retired}
        wide={timingTower.displayMode !== BGTimingTowerDisplayModes.LeftOnly}
        top={(car.position - 1) * theme.design.timingTower.rowHeightPx}
      >
        {car.notices.includes(CarNotice.FastestLap) && (
          <FastestLapGem />
        )}
        <RowLeftHalf
          roundedCornerBottom={
            bottomRounded && orMatch(
              timingTower.displayMode,
              BGTimingTowerDisplayModes.LeftOnly,
              BGTimingTowerDisplayModes.FullLeft,
            ) ? 5 : undefined
          }
        >
          <RowLeftHalfLayout>
            {car.status !== CarStatus.Retired && (
              <PositionFlag
                size={32}
                number={car.position}
                numberSizeFraction={.6}
              />
            )}
            <DriverName>
              {car.driver.initials}
            </DriverName>
          </RowLeftHalfLayout>
          <RowLeftHalfGemContainer>
            <TeamGem team={car.driver.team.id} height={30} />
          </RowLeftHalfGemContainer>
        </RowLeftHalf>
        <RowRightHalf
          roundedCornerTop={car.position === 1 ? 5 : undefined}
          roundedCornerBottom={
            bottomRounded && orMatch(
              timingTower.splitsMode,
              BGTimingTowerSplitsMode.Leader,
              BGTimingTowerSplitsMode.Interval,
            ) ? 5 : undefined
          }
        >
          <RowRightHalfLayout>
            <TimeDiff xScale={xScale} yScale={yScale}>
              {rightHalfContent}
            </TimeDiff>
          </RowRightHalfLayout>
        </RowRightHalf>
      </AnimatedRowContainer>
    );
  };

  return (
    <RowsContainer
      carsToDisplay={startingCarsCount}
      retiredCarsPresent={retiredCarsCount > 0}
    >
      {rows}
    </RowsContainer>
  );
}
