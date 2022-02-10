import { BGChyronDriver, BGChyronSubMode, OpenState } from "../../../../types/state";
import { useSpring } from "@react-spring/web";

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
import { useDispatch } from "react-redux";
import { clearChyrons } from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { VenetianBlindsTransition } from "../../Common/VenetianBlindsTransition";

type ChyronDriverProps = {
  chyronData: BGChyronDriver,
  subMode: BGChyronSubMode,
  openState: OpenState,
};
export function ChyronDriver({ chyronData, subMode, openState }: ChyronDriverProps) {
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
    config: { duration: 300 },
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
          duration: 1167,
        }]}
      />
      <BaseBlack
        open={openState !== 0}
        transitionProps={[{
          property: "opacity",
          duration: 800,
          timing: "ease-in",
        }, {
          property: "width",
          duration: 667,
          timing: "ease-out",
          delay: 0,
        }]}
      />
      <BaseLayout
        open={openState !== 0}
        transitionProps={[{
          property: "clip-path",
          duration: 400,
          timing: "ease-in",
          delay: 333,
        }]}
      >
        <BaseBackgroundColor
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: 566,
            delay: 600,
          }]}
          teamColor={teamColor}
        />
        <Spacer width="6px" />
        {showPosFlag && (
          <VenetianBlindsTransition
            visible={openState !== 0}
            delay={500}
            blindsColor="#f60d0d"
            blindsColorFadeDuration={300}
            blindsColorFadeDelay={200}
            blindsAngle={-45}
            blindsOpenDuration={100}
            blindsOpenDelay={150}
            blindsSize={{ transparent: 3, opaque: 6 }}
            wipeAngle={40}
            wipeDuration={300}
            wipeStartingCorner="bottomRight"
            opacityStart={0.1}
            opacityDuration={200}
            opacityDelay={100}
            spanBlinkDuration={500}
          >
            <PositionFlag size={baseHeight * 0.85} number={car.position} />
          </VenetianBlindsTransition>
        )}
        <Spacer width="8px" />
        <TeamColorBar
          open={openState !== 0}
          transitionProps={[{
            property: "clip-path",
            duration: 667,
            timing: "ease-in-out",
            delay: 733,
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
          <TeamName open={openState !== 0}>
            {car.driver.team.shortName}
          </TeamName>
        </TextContainer>
        <FlagContainer
          open={openState !== 0}
          transitionProps={[{
            property: "opacity",
            duration: 500,
            delay: 1000,
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
        <VenetianBlindsTransition
          visible={openState !== 0}
          delay={1500}
          blindsColor={teamColor}
          blindsColorFadeDuration={600}
          blindsColorFadeDelay={300}
          blindsAngle={-45}
          blindsOpenDuration={600}
          blindsOpenDelay={600}
          blindsSize={{ transparent: 2, opaque: 5 }}
          wipeAngle={45}
          wipeDuration={600}
          wipeStartingCorner="bottomRight"
        >
          <DriverPortraitContainer placement={{ right: "-5px", bottom: "0" }}>
            <DriverPortrait
              driverId={car.driver.id}
              height={baseHeight * 2.5}
              verticalOffsetPercentage={18}
            />
          </DriverPortraitContainer>
        </VenetianBlindsTransition>
      )}
    </AnimatedBaseContainer>
  );
}
