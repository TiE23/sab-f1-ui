import { useEffect, useState } from "react";
import useTimeoutWhen from "@rooks/use-timeout-when";
import { useSpring } from "@react-spring/web";

import { theme } from "../../../../shared/theme";
import { orMatch } from "../../../../utils/common";
import { getCarAtPos, timeDiff } from "../../../../utils/event";
import { formatTime, outlineClipPath } from "../../../../utils/styling";

import { Fraction } from "../../../../types/style";
import { Meters, Milliseconds } from "../../../../types/util";
import {
  BGTimingTowerDisplayMode,
  BGTimingTowerSplitsMode,
  Car,
  CarNotice,
  CarStatus,
  Grid,
} from "../../../../types/state";

import { PositionFlag } from "../../Common/PositionFlag";
import { TeamGem } from "../../Common/TeamGem";
import { WipeTransition } from "../../Common/WipeTransition";
import {
  AnimatedRowContainer,
  DriverName,
  FastestLapGem,
  RowLeftHalf,
  RowLeftHalfPosFlagContainer,
  RowLeftHalfGemContainer,
  RowLeftHalfLayout,
  RowRightHalf,
  RowRightHalfLayout,
  TimeDiff,
  RowLeftHalfPosFlagChangeContainer,
  AnimatedRowLeftHalfOutline,
} from "./styles";
import useMeasure from "react-use-measure";

const WIPE_DELAY: Milliseconds = 3500;
const WIPE_DURATION: Milliseconds = 400;
const TRAVEL_DURATION: Milliseconds = 750;

interface TimingTowerRowProps {
  car: Car;
  grid: Grid;
  startingCarsCount: number;
  retiredCarsCount: number;
  splitsMode: BGTimingTowerSplitsMode;
  displayMode: BGTimingTowerDisplayMode;
  trackLength: Meters;
  debugDurationMultiplier?: Fraction,
}
export function TimingTowerRow({
  car,
  grid,
  startingCarsCount,
  retiredCarsCount,
  splitsMode,
  displayMode,
  trackLength,
  debugDurationMultiplier: DDM = 1.0,
}: TimingTowerRowProps) {
  const [pastPos, setPastPos] = useState(car.position);
  const [posChange, setPosChange] = useState(0);

  // Using timeouts and boolean states I can manipulate visiblity of the position
  // change effects. wipeVisible is true for only 1ms before being switched back off.
  const [showPosChange, setshowPosChange] = useState(false);
  const [showOutline, setShowOutline] = useState(false);
  const [wipeVisible, setWipeVisible] = useState(false);
  useTimeoutWhen(() => setshowPosChange(false), (WIPE_DELAY + WIPE_DURATION) * DDM, showPosChange);
  useTimeoutWhen(() => setShowOutline(false), TRAVEL_DURATION * DDM, showOutline);
  useTimeoutWhen(() => setWipeVisible(false), 1, wipeVisible);

  useEffect(() => {
    if (car.position !== pastPos) {
      setPastPos(car.position);
      setPosChange(pastPos - car.position);
      setshowPosChange(true);
      setShowOutline(true);
      setWipeVisible(true);
    }
  }, [car.position]);

  const { outlineClipPathProgress } = useSpring({
    outlineClipPathProgress: showPosChange ? 1 : 0,
    config: { duration: 333 * DDM },
    delay: 0 * DDM,
  });

  const [leftHalfRef, {
    height: leftHalfHeight,
    width: leftHalfWidth,
  }] = useMeasure();

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
      transitionTime={TRAVEL_DURATION * DDM}
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
        transitionTime={TRAVEL_DURATION * DDM}
        ref={leftHalfRef}
      >
        <RowLeftHalfLayout>
          {car.status !== CarStatus.Retired && (
            <RowLeftHalfPosFlagContainer size={32}>
              <PositionFlag
                size={32}
                number={car.position}
                numberSizeFraction={.6}
              />
              <RowLeftHalfPosFlagChangeContainer
                size={32}
                visible={showPosChange}
                transitionTime={167 * DDM}
              >
                {showPosChange && (
                  <WipeTransition
                    visible={wipeVisible}
                    delay={WIPE_DELAY * DDM}
                    angle={45}
                    duration={WIPE_DURATION * DDM}
                    startingCorner="topLeft"
                  >
                    <PositionFlag
                      size={32}
                      number={car.position}
                      numberSizeFraction={.6}
                      color={posChange > 0
                        ? theme.colors.posGainedGreen
                        : theme.colors.posLostRed}
                    />
                  </WipeTransition>

                )}
              </RowLeftHalfPosFlagChangeContainer>

            </RowLeftHalfPosFlagContainer>
          )}
          <DriverName>
            {car.driver.initials}
          </DriverName>
        </RowLeftHalfLayout>
        <RowLeftHalfGemContainer>
          <TeamGem team={car.driver.team.id} height={30} />
        </RowLeftHalfGemContainer>

        <AnimatedRowLeftHalfOutline
          open={showOutline}
          startThickness={1.5}
          endThickness={1.5}
          startColor={posChange > 0
            ? theme.colors.posGainedGreen
            : theme.colors.posLostRed}
          endColor={posChange > 0
            ? theme.colors.posGainedGreen
            : theme.colors.posLostRed}
          transitionProps={[{
            property: "opacity",
            duration: 333 * DDM,
          }]}
          style={{
            clipPath: outlineClipPathProgress.to(progress => {
              const coordinates = outlineClipPath(
                leftHalfWidth,
                leftHalfHeight,
                progress,
                3,
                3,
              );
              return `polygon(${coordinates.map(([x, y]) => `${x}px ${y}px`).join(", ")})`;
            }),
          }}
        />
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
        transitionTime={TRAVEL_DURATION * DDM}
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

