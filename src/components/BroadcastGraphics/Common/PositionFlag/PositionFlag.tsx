import { theme } from "../../../../shared/theme";
import { Fraction, Px } from "../../../../types/style";

import { PositionFlagBox, PositionNumber } from "./styles";

type PositionFlagProps = {
  size: Px,
  number: number,
  numberSizeFraction?: Fraction,
  bgColor?: string,
  numberColor?: string,
};
export function PositionFlag({
  size,
  number,
  numberSizeFraction = 0.64,
  bgColor = theme.colors.posWhite,
  numberColor = theme.colors.black,
}: PositionFlagProps) {
  return (
    <PositionFlagBox size={size} color={bgColor}>
      <PositionNumber size={size * numberSizeFraction} color={numberColor}>
        {number}
      </PositionNumber>
    </PositionFlagBox>
  );
}
