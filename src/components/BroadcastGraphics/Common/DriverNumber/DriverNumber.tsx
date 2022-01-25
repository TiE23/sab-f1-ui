import { TeamId } from "../../../../types/state";
import { getTeamNumberStyle } from "../../../../utils/dataLookup";
import { NumberContainer, ShadowNumber, StrokeNumber } from "./styles";

type DriverNumberProps = {
  number: number,
  fontSize: string,
  teamId: TeamId,
};
export function DriverNumber({ number, fontSize, teamId }: DriverNumberProps) {
  const style = getTeamNumberStyle(teamId);
  return (
    <NumberContainer>
      {style.rules.map((rule, i) => {
        if (rule.type === "stroke") {
          return (
            <StrokeNumber
              key={i}
              fontFamily={style.fontFamily}
              fontSize={fontSize}
              numberColor={style.numberColor}
              strokeColor={rule.color}
              strokeWidth={`${rule.width}em`}
            >
              {number}
            </StrokeNumber>
          );
        } else if (rule.type === "shadow") {
          return (
            <ShadowNumber
              key={i}
              fontFamily={style.fontFamily}
              fontSize={fontSize}
              numberColor={style.numberColor}
              shadowProperties={rule.property}
            >
              {number}
            </ShadowNumber>
          );
        }
      })}
    </NumberContainer>
  );
}
