import { theme } from "../../../../shared/theme";
import { Fraction, Px } from "../../../../types/style";

import { PositionFlagBox, PositionNumber } from "./styles";

type PositionFlagProps = {
  size: Px,
  number: number,
  numberSizeFraction?: Fraction,
  color?: string;
};
export function PositionFlag({
  size,
  number,
  numberSizeFraction = 0.64,
  color = theme.colors.positionFlagBG,
}: PositionFlagProps) {
  return (
    <PositionFlagBox size={size} color={color}>
      <PositionNumber size={size * numberSizeFraction}>
        {number}
      </PositionNumber>
    </PositionFlagBox>
  );
}
