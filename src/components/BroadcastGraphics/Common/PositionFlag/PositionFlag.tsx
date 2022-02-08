import { Px } from "../../../../types/style";

import { PositionFlagBox, PositionNumber } from "./styles";

type PositionFlagProps = {
  size: Px,
  number: number,
};
export function PositionFlag({ size, number }: PositionFlagProps) {
  return (
    <PositionFlagBox size={size}>
      <PositionNumber size={size}>
        {number}
      </PositionNumber>
    </PositionFlagBox>
  );
}
