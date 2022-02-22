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

  const [retiredCarsPresent, setRetiredCarsPresent] = useState(0);
  const [rows, setRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let anyRetired = 0;

    setRows(grid.map((car, index, cars) => {
      if (car.status === CarStatus.Retired) {
        ++anyRetired;
      }
      return buildRow(car, index, cars.length);
    }));
    setRetiredCarsPresent(anyRetired);
  }, [lastUpdate, splitsMode]);


  const buildRow = (
    car: Car,
    index: number,
    count: number,
  ) => {
    const lastRow = index + 1 === count;
    let rightHalfContent = "";
    let xScale: Fraction = 1.0;
    let yScale: Fraction = 1.0;

    if (index === leaderGridSpot) {
      // Leading car shows "Leader" or "Interval".
      rightHalfContent = splitsMode === BGTimingTowerSplitsMode.Leader
        ? "Leader" : splitsMode === BGTimingTowerSplitsMode.Interval
          ? "Interval" : "";
    } else if (car.status === CarStatus.Retired) {
      // Retired car shows "OUT".
      rightHalfContent = "OUT";
    } else {
      // Other cars show gaps.
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
            lastRow && orMatch(
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
          roundedCornerTop={
            index === 0 && car.status !== CarStatus.Retired
              ? 5 : undefined
          }
          roundedCornerBottom={
            lastRow && orMatch(
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
    <RowsContainer carsToDisplay={grid.length} retiredCarsPresent={!!retiredCarsPresent}>
      {rows}
    </RowsContainer>
  );
}
