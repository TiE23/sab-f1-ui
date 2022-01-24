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
import { drivers } from "../../../../domain/data/teams";
import { theme } from "../../../../shared/theme";

export function ChyronDriver() {
  // TODO - Get driver details from Redux.
  const driver = drivers["hamilton"];

  const baseWidth = 582;
  const baseHeight = 72;

  return (
    <BaseBackground width={baseWidth} height={baseHeight}>
      <Spacer width="6px" />
      <PositionFlag containerHeight={baseHeight}>
        <PositionNumber containerHeight={baseHeight}>1</PositionNumber>
      </PositionFlag>
      <Spacer width="8px" />
      <TeamColorBar color={theme.colors.teams[driver.team.id]} />
      <Spacer width="8px" />
      <TextContainer>
        <NameContainer>
          <FirstName>{driver.firstName}</FirstName>
          <LastName>{driver.lastName}</LastName>
          <NumberContainer>
            <DriverNumber
              teamId={driver.team.id}
              fontSize="29px"
              number={driver.number}
            />
          </NumberContainer>
        </NameContainer>
        <TeamName>{driver.team.shortName}</TeamName>
      </TextContainer>
      <FlagContainer
        height={baseHeight * 0.9}
        width={250}
      >
        <AngledFlag
          flagMode="country"
          flag={driver.nationality}
          flagHeight={64}
        />

      </FlagContainer>
    </BaseBackground>
  );
}
