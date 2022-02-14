import { DriverId } from "../../../../types/state";
import { Percent, Px } from "../../../../types/style";

import { PortraitDiv } from "./styles";

const driverPortraits = require.context("../../../../public/images/drivers/front", true);

type DriverPortraitProps = {
  driverId: DriverId,
  height: Px,
  verticalOffsetPercentage?: Percent,
};
export function DriverPortrait({
  driverId,
  height,
  verticalOffsetPercentage = 0,
}: DriverPortraitProps) {
  return (
    <PortraitDiv
      src={driverPortraits(`./${driverId}.png`)}
      height={height}
      verticalOffsetPercentage={verticalOffsetPercentage}
    />
  );
}
