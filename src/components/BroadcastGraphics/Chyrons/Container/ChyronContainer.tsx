import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { Placement } from "../../../../types/style";

import { ChyronDriver } from "../Driver";
import { ChyronPlacement, DoubleChyronContainer } from "./styles";

type ChyronContainerProps = {
  debug?: boolean,
  placement?: Placement,
};
export function ChyronContainer({ debug = false, placement = {} }: ChyronContainerProps) {
  const { chyrons } = useSelector(broadcastGraphicsSelector);
  const { debugDurationMultiplier } = useSelector(workspaceSelector);

  if (chyrons == null || chyrons.driver == null) return null;

  const primary = (
    <ChyronDriver
      chyronData={chyrons.driver.primary}
      subMode={chyrons.subMode}
      openState={chyrons.openState}
      showRolex
      debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
    />
  );

  return (
    <ChyronPlacement placement={placement}>
      {chyrons.subMode === "medium" && chyrons.driver.secondary ? (
        <DoubleChyronContainer>
          {primary}
          <ChyronDriver
            chyronData={chyrons.driver.secondary}
            subMode={chyrons.subMode}
            openState={chyrons.openState}
            showRolex={false}
            debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
          />
        </DoubleChyronContainer>
      ) : primary}
    </ChyronPlacement>
  );
}
