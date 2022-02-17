import { Fraction, Px } from "../../../../types/style";

import { PositionFlagBox, PositionNumber } from "./styles";

type PositionFlagProps = {
  size: Px,
  number: number,
  numberSizeFraction?: Fraction,
};
export function PositionFlag({ size, number, numberSizeFraction = 0.64 }: PositionFlagProps) {
  return (
    <PositionFlagBox size={size}>
      <PositionNumber size={size * numberSizeFraction}>
        {number}
      </PositionNumber>
    </PositionFlagBox>
  );
}
