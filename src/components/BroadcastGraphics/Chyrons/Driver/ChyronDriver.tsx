import { useSpring } from "@react-spring/web";
import { useDispatch } from "react-redux";

import { BGChyronDriver, BGChyronSubMode, OpenState } from "../../../../types/state";
import { Fraction } from "../../../../types/style";
import { clearChyrons } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { theme } from "../../../../shared/theme";

import { DriverNumber } from "../../Common/DriverNumber";
import { AngledFlag } from "../../Common/AngledFlag";
import { PositionFlag } from "../../Common/PositionFlag";
import { DriverPortrait } from "../../Common/DriverPortrait";
import {
  AnimatedBaseContainer,
  BaseLayout,
  BaseOutline,
  BaseBlack,
  BaseBackgroundColor,
  FirstName,
  LastName,
  NameContainer,
  NumberContainer,
  Spacer,
  TeamColorBar,
  TeamName,
  TextContainer,
  FlagContainer,
  DriverPortraitContainer,
} from "./styles";
import { VenetianBlindsTransition } from "../../Common/VenetianBlindsTransition";

type ChyronDriverProps = {
  chyronData: BGChyronDriver,
  subMode: BGChyronSubMode,
  openState: OpenState,
  debugDurationMultiplier?: Fraction,
};
export function ChyronDriver({
  chyronData,
  subMode,
  openState,
  debugDurationMultiplier: DDM = 1.0,
}: ChyronDriverProps) {
  const [baseWidth, baseHeight] = subMode === "medium" ? [582, 72]
    : subMode === "large" ? [638, 98]
      : [0, 0];

  const { car, flagMode, showPosFlag, showDriverNumber, showPortrait } = chyronData;
  const flagProps = flagMode === "country"
    ? { flagMode, flag: car.driver.nationality }
    : flagMode === "team" ? { flagMode, flag: car.driver.team.id } : undefined;

  const dispatch = useDispatch();

  const containerFadeAwaySpring = useSpring({
    opacity: openState == -1 ? 0 : 1,
    config: { duration: 300 * DDM },
    delay: 0,
    onRest: () => {
      if (openState === -1) {
        dispatch(clearChyrons());
      }
    },
  });

  const teamColor = theme.colors.teams[car.driver.team.id];

  return (
    <AnimatedBaseContainer
      width={baseWidth}
      height={baseHeight}
      style={containerFadeAwaySpring}
    >
      <BaseOutline
        open={openState !== 0}
        transitionProps={[{
          property: "outline",
          duration: 1167 * DDM,
        }]}
      />
      <BaseBlack
        open={openState !== 0}
        transitionProps={[{
          property: "opacity",
          duration: 800 * DDM,
          timing: "ease-in",
        }, {
          property: "width",
          duration: 667 * DDM,
          timing: "ease-out",
        }]}
      />
      <BaseLayout
        open={openState !== 0}
        transitionProps={[{
          property: "clip-path",
          duration: 400 * DDM,
          timing: "ease-in",
          delay: 333 * DDM,
        }]}
      >
        <BaseBackgroundColor
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: 566 * DDM,
            delay: 600 * DDM,
          }]}
          teamColor={teamColor}
        />
        <Spacer width="6px" />
        {showPosFlag && (
          <VenetianBlindsTransition
            visible={openState !== 0}
            delay={500 * DDM}
            blindsColor="#f60d0d"
            blindsColorFadeDuration={300 * DDM}
            blindsColorFadeDelay={200 * DDM}
            blindsAngle={-45}
            blindsOpenDuration={100 * DDM}
            blindsOpenDelay={150 * DDM}
            blindsSize={{ transparent: 3, opaque: 6 }}
            wipeAngle={40}
            wipeDuration={333 * DDM}
            wipeStartingCorner="bottomRight"
            opacityStart={0.1}
            opacityDuration={200 * DDM}
            opacityDelay={100 * DDM}
            spanBlinkDuration={500 * DDM}
          >
            <PositionFlag size={baseHeight * 0.85} number={car.position} />
          </VenetianBlindsTransition>
        )}
        <Spacer width="8px" />
        <TeamColorBar
          open={openState !== 0}
          transitionProps={[{
            property: "clip-path",
            duration: 667 * DDM,
            timing: "ease-in-out",
            delay: 733 * DDM,
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
            duration={233 * DDM}
            delay={500 * DDM}
          >
            {car.driver.team.shortName}
          </TeamName>
        </TextContainer>
        <FlagContainer
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: 500 * DDM,
            delay: 1000 * DDM,
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
            duration: 500 * DDM,
            delay: 2000 * DDM,
          }]}
          placement={{ right: "-5px", bottom: "0" }}
        >
          <VenetianBlindsTransition
            visible={openState !== 0}
            delay={2000 * DDM}
            blindsColor={teamColor}
            blindsColorFadeDuration={600 * DDM}
            blindsColorFadeDelay={300 * DDM}
            blindsAngle={-45}
            blindsOpenDuration={300 * DDM}
            blindsOpenDelay={300 * DDM}
            blindsSize={{ transparent: 2, opaque: 5 }}
            wipeAngle={45}
            wipeDuration={0 * DDM}
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
