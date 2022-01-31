import { BGChyronDriver, BGChyronSubMode } from "../../../../types/state";

import { theme } from "../../../../shared/theme";

import { DriverNumber } from "../../Common/DriverNumber";
import { AngledFlag } from "../../Common/AngledFlag";
import {
  BaseBackground,
  FirstName,
  PositionNumber,
  LastName,
  NameContainer,
  NumberContainer,
  PositionFlag,
  Spacer,
  TeamColorBar,
  TeamName,
  TextContainer,
  FlagContainer,
} from "./styles";

type ChyronDriverProps = {
  chyronData: BGChyronDriver,
  subMode: BGChyronSubMode,
};
export function ChyronDriver({ chyronData, subMode }: ChyronDriverProps) {
  const [baseWidth, baseHeight] = subMode === "medium" ? [582, 72]
    : subMode === "large" ? [638, 98]
      : [0, 0];

  const { car, flagMode, showPosFlag, showDriverNumber } = chyronData;

  return (
    <BaseBackground width={baseWidth} height={baseHeight}>
      <Spacer width="6px" />
      {showPosFlag && (
        <PositionFlag containerHeight={baseHeight}>
          <PositionNumber containerHeight={baseHeight}>
            {car.position}
          </PositionNumber>
        </PositionFlag>
      )}
      <Spacer width="8px" />
      <TeamColorBar color={theme.colors.teams[car.driver.team.id]} />
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
        <TeamName>{car.driver.team.shortName}</TeamName>
      </TextContainer>
      <FlagContainer
        height={baseHeight * 0.9}
        width={baseHeight * 3}
        right={-baseHeight * 0.6}
      >
        <AngledFlag
          flagMode={flagMode}
          flag={car.driver.nationality}
          flagHeight={baseHeight * 0.9}
        />
      </FlagContainer>
    </BaseBackground>
  );
}
