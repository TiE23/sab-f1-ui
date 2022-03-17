import { useSpring } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";

import { BGChyronDriver, BGChyronSubMode, CarStatus, OpenState } from "../../../../types/state";
import { DebugDurationProps } from "../../../../types/style";
import { clearChyrons } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { theme } from "../../../../shared/theme";
import { outlineClipPath } from "../../../../utils/styling";
import { eventSelector } from "../../../../features/event/eventSelector";

import { DriverNumber } from "../../Common/DriverNumber";
import { AngledFlag } from "../../Common/AngledFlag";
import { PositionFlag } from "../../Common/PositionFlag";
import { DriverPortrait } from "../../Common/DriverPortrait";
import {
  AnimatedBaseContainer,
  BaseLayout,
  AnimatedBaseOutline,
  BaseBlack,
  BaseBackgroundColor,
  FirstName,
  LastName,
  NameContainer,
  NumberContainer,
  TeamColorBar,
  TeamName,
  TextContainer,
  FlagContainer,
  DriverPortraitContainer,
} from "./styles";
import { VenetianBlindsTransition } from "../../Common/VenetianBlindsTransition";
import { Spacer } from "../../Common/Spacer.styled";
import { RolexGem } from "../../Gems/RolexGem";

type ChyronDriverProps = DebugDurationProps & {
  chyronData: BGChyronDriver,
  subMode: BGChyronSubMode,
  openState: OpenState,
  showRolex: boolean,
};
export function ChyronDriver({
  chyronData,
  subMode,
  openState,
  showRolex,
  debugDurationMultiplier: DDM = 1.0,
}: ChyronDriverProps) {
  const [baseWidth, baseHeight] = subMode === "medium" ? [582, 72]
    : subMode === "large" ? [638, 98]
      : [0, 0];

  const { carGridSpot, flagMode, showPosFlag, showDriverNumber, showPortrait } = chyronData;
  const { grid } = useSelector(eventSelector);
  const car = grid[carGridSpot];

  const flagProps = flagMode === "country"
    ? { flagMode, flag: car.driver.nationality }
    : flagMode === "team"
      ? { flagMode, flag: car.driver.team.id }
      : undefined;

  const dispatch = useDispatch();

  const { design: { chyronDriver: cdTheme } } = theme;
  const teamColor = theme.colors.teams[car.driver.team.id];

  const containerFadeAwaySpring = useSpring({
    opacity: openState == -1 ? 0 : 1,
    config: { duration: cdTheme.containerFadeAwayDurationMs * DDM },
    delay: 0,
    onRest: () => {
      if (openState === -1) {
        dispatch(clearChyrons());
      }
    },
  });

  const { outlineClipPathProgress } = useSpring({
    outlineClipPathProgress: openState !== 0 ? 1 : 0,
    config: { duration: cdTheme.outlineClipPathDurationMs * DDM },
    delay: 0,
  });

  return (
    <AnimatedBaseContainer
      width={baseWidth}
      height={baseHeight}
      style={containerFadeAwaySpring}
    >
      {showRolex && (
        <RolexGem openState={openState} debugDurationMultiplier={DDM} />
      )}
      <AnimatedBaseOutline
        open={openState !== 0}
        startThickness={5}
        endThickness={1}
        startColor="#ffffffff"
        endColor="#ffffff00"
        transitionProps={[{
          property: "outline",
          duration: cdTheme.outlineFadeDurationMs * DDM,
        }]}
        style={{
          clipPath: outlineClipPathProgress.to(progress => {
            const coordinates = outlineClipPath(
              baseWidth,
              baseHeight,
              progress,
              5,
            );
            return `polygon(${coordinates.map(([x, y]) => `${x}% ${y}%`).join(", ")})`;
          }),
        }}
      />
      <BaseBlack
        open={openState !== 0}
        transitionProps={[{
          property: "opacity",
          duration: cdTheme.baseBlackOpacityDurationMs * DDM,
          timing: "ease-in",
        }, {
          property: "width",
          duration: cdTheme.baseBlackWidthDurationMs * DDM,
          timing: "ease-out",
        }]}
      />
      <BaseLayout
        open={openState !== 0}
        transitionProps={[{
          property: "clip-path",
          duration: cdTheme.baseWipeDurationMs * DDM,
          timing: "ease-in",
          delay: cdTheme.baseWipeDelay * DDM,
        }]}
      >
        <BaseBackgroundColor
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: cdTheme.baseColorDurationMs * DDM,
            delay: cdTheme.baseColorDelayMs * DDM,
          }]}
          teamColor={teamColor}
        />
        <Spacer width="6px" />
        {showPosFlag && car.status !== CarStatus.Retired && (
          <VenetianBlindsTransition
            visible={openState !== 0}
            delay={cdTheme.posFlagBlindsDelayMs * DDM}
            blindsColor={cdTheme.posFlagBlindsColor}
            blindsColorFadeDuration={cdTheme.posFlagBlindsColorFadeDurationMs * DDM}
            blindsColorFadeDelay={cdTheme.posFlagBlindsColorFadeDelayMs * DDM}
            blindsAngle={cdTheme.posFlagBlindsAngleDeg}
            blindsOpenDuration={cdTheme.posFlagBlindsOpenDurationMs * DDM}
            blindsOpenDelay={cdTheme.posFlagBlindsOpenDelayMs * DDM}
            blindsSize={cdTheme.posFlagBlindsBlindsSize}
            wipeAngle={cdTheme.posFlagWipeAngleDeg}
            wipeDuration={cdTheme.posFlagWipeDuration * DDM}
            wipeStartingCorner="bottomRight"
            opacityStart={cdTheme.posFlagOpacityStartFraction}
            opacityDuration={cdTheme.posFlagOpacityDurationMs * DDM}
            opacityDelay={cdTheme.posFlagOpacityDelayMs * DDM}
            spanBlinkDuration={cdTheme.posFlagSpanBlinkDurationMs * DDM}
          >
            <PositionFlag size={baseHeight * 0.85} number={car.position} />
          </VenetianBlindsTransition>
        )}
        <Spacer width="8px" />
        <TeamColorBar
          open={openState !== 0}
          transitionProps={[{
            property: "clip-path",
            duration: cdTheme.teamColorBarDurationMs * DDM,
            timing: "ease-in-out",
            delay: cdTheme.teamColorBarDelayMs * DDM,
          }]}
          color={teamColor}
        />
        <Spacer width="8px" />
        <TextContainer>
          <NameContainer>
            <FirstName>{car.driver.firstName}</FirstName>
            <LastName>{car.driver.lastName}</LastName>
            {showDriverNumber && (
              <NumberContainer>
                <DriverNumber
                  teamId={car.driver.team.id}
                  fontSize="29px"
                  number={car.driver.number}
                />
              </NumberContainer>
            )}
          </NameContainer>
          <TeamName
            open={openState !== 0}
            duration={cdTheme.teamNameAnimationDurationMs * DDM}
            delay={cdTheme.teamNameAnimationDelayMs * DDM}
          >
            {car.driver.team.shortName}
          </TeamName>
        </TextContainer>
        <FlagContainer
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: cdTheme.flagOpacityDurationMs * DDM,
            delay: cdTheme.flagDelay * DDM,
          }, {
            property: "right",
            duration: cdTheme.flagRightDuration * DDM,
            delay: cdTheme.flagDelay * DDM,
          }]}
          height={baseHeight * 0.9}
          width={baseHeight * 3}
          right={-baseHeight * 0.6}
        >
          {flagProps != null && (
            <AngledFlag
              flagHeight={baseHeight * 0.9}
              flagProps={flagProps}
            />
          )}
        </FlagContainer>
      </BaseLayout>
      {showPortrait && (
        <DriverPortraitContainer
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: cdTheme.portraitOpacityDurationMs * DDM,
            delay: cdTheme.portraitOpacityDelayMs * DDM,
          }]}
          placement={cdTheme.portraitPlacement}
        >
          <VenetianBlindsTransition
            visible={openState !== 0}
            delay={cdTheme.portraitBlindsDelayMs * DDM}
            blindsColor={teamColor}
            blindsColorFadeDuration={cdTheme.portraitBlindsColorFadeDurationMs * DDM}
            blindsColorFadeDelay={cdTheme.portraitBlindsColorFadeDelayMs * DDM}
            blindsAngle={cdTheme.portraitBlindsAngleDeg}
            blindsOpenDuration={cdTheme.portraitBlindsOpenDurationMs * DDM}
            blindsOpenDelay={cdTheme.portraitBlindsOpenDelayMs * DDM}
            blindsSize={cdTheme.portraitBlindsSize}
            wipeAngle={cdTheme.portraitWipeAngleDeg}
            wipeDuration={cdTheme.portraitWipeDurationMs * DDM}
            wipeStartingCorner="bottomRight"
          >
            <DriverPortrait
              driverId={car.driver.id}
              height={baseHeight * 2.5}
              verticalOffsetPercentage={18}
            />
          </VenetianBlindsTransition>
        </DriverPortraitContainer>
      )}
    </AnimatedBaseContainer>
  );
}
