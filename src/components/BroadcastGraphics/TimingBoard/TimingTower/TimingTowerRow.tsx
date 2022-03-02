import { theme } from "../../../../shared/theme";
import { orMatch } from "../../../../utils/common";
import { getCarAtPos, timeDiff } from "../../../../utils/event";
import { formatTime } from "../../../../utils/styling";
import {
  BGTimingTowerDisplayMode,
  BGTimingTowerSplitsMode,
  Car,
  CarNotice,
  CarStatus,
  Grid,
} from "../../../../types/state";
import { Fraction } from "../../../../types/style";
import { Meters } from "../../../../types/util";

import { PositionFlag } from "../../Common/PositionFlag";
import { TeamGem } from "../../Common/TeamGem";
import {
  AnimatedRowContainer,
  DriverName,
  FastestLapGem,
  RowLeftHalf,
  RowLeftHalfGemContainer,
  RowLeftHalfLayout,
  RowRightHalf,
  RowRightHalfLayout,
  TimeDiff,
} from "./styles";

interface TimingTowerRowProps {
  car: Car;
  grid: Grid;
  startingCarsCount: number;
  retiredCarsCount: number;
  splitsMode: BGTimingTowerSplitsMode;
  displayMode: BGTimingTowerDisplayMode;
  trackLength: Meters;
}
export function TimingTowerRow({
  car,
  grid,
  startingCarsCount,
  retiredCarsCount,
  splitsMode,
  displayMode,
  trackLength,
}: TimingTowerRowProps) {
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
      wide={displayMode !== BGTimingTowerDisplayMode.LeftOnly}
      top={(car.position - 1) * theme.design.timingTower.rowHeightPx}
    >
      {car.notices.includes(CarNotice.FastestLap) && (
        <FastestLapGem />
      )}
      <RowLeftHalf
        roundedCornerBottom={
          bottomRounded && orMatch(
            displayMode,
            BGTimingTowerDisplayMode.LeftOnly,
            BGTimingTowerDisplayMode.FullLeft,
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
            splitsMode,
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
}
