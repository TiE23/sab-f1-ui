import { DriverNumber } from "../../Common/DriverNumber";
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
} from "./styles";

export function ChyronDriverBasic() {
  // TODO - Get driver details from Redux.

  const baseWidth = 582;
  const baseHeight = 72;

  return (
    <BaseBackground width={baseWidth} height={baseHeight}>
      <Spacer width="6px" />
      <PositionFlag containerHeight={baseHeight}>
        <PositionNumber containerHeight={baseHeight}>1</PositionNumber>
      </PositionFlag>
      <Spacer width="8px" />
      <TeamColorBar color="#00d2be" />
      <Spacer width="8px" />
      <TextContainer>
        <NameContainer>
          <FirstName>Lewis</FirstName>
          <LastName>Hamilton</LastName>
          <NumberContainer>
            <DriverNumber teamId="mercedes" fontSize="29px" number={44} />
          </NumberContainer>
        </NameContainer>
        <TeamName>Mercedes</TeamName>
      </TextContainer>
    </BaseBackground>
  );
}
