import { useEffect, useState } from "react";
import useTimeoutWhen from "@rooks/use-timeout-when";
import { useSpring } from "@react-spring/web";

import { theme } from "../../../../shared/theme";
import { orMatch } from "../../../../utils/common";
import { getCarAtPos, timeDiff } from "../../../../utils/event";
import { formatTime, outlineClipPath } from "../../../../utils/styling";

import { DebugDurationProps, Fraction } from "../../../../types/style";
import { Meters } from "../../../../types/util";
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
  DriverNameContainer,
  DriverNameWipe,
} from "./styles";
import useMeasure from "react-use-measure";

type TimingTowerRowProps = DebugDurationProps & {
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
  debugDurationMultiplier: DDM = 1.0,
}: TimingTowerRowProps) {
  const { design: { timingTower: ttTheme } } = theme;

  const [pastPos, setPastPos] = useState(car.position);
  const [posChange, setPosChange] = useState(0);
  const [pastDisplayMode, setPastDisplayMode] = useState(displayMode);
  const [hugRight, setHugRight] = useState(true);

  // Using timeouts and boolean states I can manipulate visiblity of the position
  // change effects. wipeVisible is true for only 1ms before being switched back off.
  const [showPosChange, setShowPosChange] = useState(false);
  const [showOutline, setShowOutline] = useState(false);
  const [wipeVisible, setWipeVisible] = useState(false);
  useTimeoutWhen(() => setShowPosChange(false), (
    ttTheme.wipeDelayMs + ttTheme.wipeDurationMs
  ) * DDM, showPosChange);
  useTimeoutWhen(() => setShowOutline(false), ttTheme.rowTravelDurationMs * DDM, showOutline);
  useTimeoutWhen(() => setWipeVisible(false), 1, wipeVisible);

  useEffect(() => {
    if (car.position !== pastPos) {
      setPastPos(car.position);
      setPosChange(pastPos - car.position);
      setShowPosChange(true);
      setShowOutline(true);
      setWipeVisible(true);
    }
  }, [car.position]);

  useEffect(() => {
    if (pastDisplayMode !== displayMode) {
      if ((pastDisplayMode === BGTimingTowerDisplayMode.LeftAndRight
        && displayMode === BGTimingTowerDisplayMode.FullLeft) || (
        pastDisplayMode === BGTimingTowerDisplayMode.FullLeft
          && displayMode === BGTimingTowerDisplayMode.LeftAndRight
      )
      ) {
        setHugRight(true);
      } else {
        setHugRight(false);
      }
      setPastDisplayMode(displayMode);
    }
  }, [displayMode]);

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
      top={(car.position - 1) * ttTheme.rowHeightPx}
      transitionTime={ttTheme.rowTravelDurationMs * DDM}
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
          ) ? ttTheme.rowRoundedCornerRadiusPx : 0
        }
        open={displayMode === BGTimingTowerDisplayMode.FullLeft}
        transitionOpeningProps={[{
          property: "width",
          duration: ttTheme.fullWidthDurationMs * DDM,
        }, {
          property: "border-top-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
        }, {
          property: "border-bottom-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
        }]}
        transitionClosingProps={[{
          property: "width",
          duration: ttTheme.fullWidthDurationMs * DDM,
          delay: ttTheme.fullWidthCloseDelayMs * DDM,
        }, {
          property: "border-top-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
          delay: ttTheme.fullWidthCloseDelayMs * DDM,
        }, {
          property: "border-bottom-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
          delay: ttTheme.fullWidthCloseDelayMs * DDM,
        }]}
        ref={leftHalfRef}
      >
        <RowLeftHalfLayout>
          {car.status !== CarStatus.Retired && (
            <RowLeftHalfPosFlagContainer size={ttTheme.posFlagSizePx}>
              <PositionFlag
                size={ttTheme.posFlagSizePx}
                number={car.position}
                numberSizeFraction={.6}
              />
              <RowLeftHalfPosFlagChangeContainer
                size={ttTheme.posFlagSizePx}
                visible={showPosChange}
                transitionTime={167 * DDM}
              >
                {showPosChange && (
                  <WipeTransition
                    visible={wipeVisible}
                    delay={ttTheme.wipeDelayMs * DDM}
                    angle={45}
                    duration={ttTheme.wipeDurationMs * DDM}
                    startingCorner="topLeft"
                  >
                    <PositionFlag
                      size={ttTheme.posFlagSizePx}
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
          <DriverNameContainer>
            <DriverName
              open={displayMode !== BGTimingTowerDisplayMode.FullLeft}
              transitionOpeningProps={[{
                property: "opacity",
                duration: 333 * DDM,
                delay: (ttTheme.fullWidthDurationMs - 333) * DDM,
              }]}
              transitionClosingProps={[{
                property: "opacity",
                duration: 333 * DDM,
                delay: 0 * DDM,
              }]}
            >
              {car.driver.initials}
            </DriverName>
            <DriverNameWipe
              open={displayMode === BGTimingTowerDisplayMode.FullLeft}
              transitionOpeningProps={[{
                property: "width",
                duration: ttTheme.fullWidthDurationMs * 2 * DDM,
                delay: 0 * DDM,
              }, {
                property: "opacity",
                duration: 333 * DDM,
                delay: 0 * DDM,
              }]}
              transitionClosingProps={[{
                property: "width",
                duration: ttTheme.fullWidthDurationMs * DDM,
                delay: 0 * DDM,
              }, {
                property: "opacity",
                duration: 333 * DDM,
                delay: (ttTheme.fullWidthDurationMs - 333) * DDM,
              }]}
            >
              <DriverName open>
                {car.driver.lastName}
              </DriverName>
            </DriverNameWipe>
          </DriverNameContainer>
        </RowLeftHalfLayout>
        <RowLeftHalfGemContainer>
          <TeamGem team={car.driver.team.id} height={ttTheme.teamGemSizePx} />
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
        roundedCornerTop={car.position === 1
          ? ttTheme.rowRoundedCornerRadiusPx : 0}
        roundedCornerBottom={
          bottomRounded && orMatch(
            splitsMode,
            BGTimingTowerSplitsMode.Leader,
            BGTimingTowerSplitsMode.Interval,
          ) ? ttTheme.rowRoundedCornerRadiusPx : 0
        }
        open={displayMode === BGTimingTowerDisplayMode.LeftAndRight}
        transitionProps={[{
          property: "border-top-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
        }, {
          property: "border-bottom-right-radius",
          duration: ttTheme.rowTravelDurationMs * DDM,
        }]}
        transitionClosingProps={[{
          property: "width",
          duration: ttTheme.fullWidthDurationMs * DDM,
        }]}
        transitionOpeningProps={[{
          property: "width",
          duration: ttTheme.fullWidthDurationMs * DDM,
          delay: ttTheme.fullWidthCloseDelayMs * DDM,
        }]}
        hugRight={hugRight}
      >
        <RowRightHalfLayout>
          <TimeDiff
            xScale={xScale}
            yScale={yScale}
            open={displayMode === BGTimingTowerDisplayMode.LeftAndRight}
            transitionOpeningProps={[{
              property: "opacity",
              duration: ttTheme.fullWidthDurationMs * DDM,
              delay: ttTheme.fullWidthCloseDelayMs * DDM,
            }]}
            transitionClosingProps={[{
              property: "opacity",
              duration: ttTheme.fullWidthDurationMs * DDM,
            }]}
          >
            {rightHalfContent}
          </TimeDiff>
        </RowRightHalfLayout>
      </RowRightHalf>
    </AnimatedRowContainer>
  );
}

