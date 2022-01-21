import { DriverNumber } from "../../Common/DriverNumber";
import {
  BaseBackground,
  FirstName,
  FlagNumber,
  LastName,
  NameContainer,
  NumberContainer,
  NumberFlag,
  TeamColorBar,
  TeamName,
  TextContainer,
} from "./styles";

export function ChyronDriverBasic() {
  // TODO - Get driver details from Redux.

  return (
    <BaseBackground>
      <NumberFlag>
        <FlagNumber>1</FlagNumber>
      </NumberFlag>
      <TeamColorBar color="#00d2be" />
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
