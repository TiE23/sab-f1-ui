import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";

import { ChyronDriver } from "../Driver";
import { DoubleChyronContainer } from "./styles";

type ChyronContainerProps = {
  debug?: boolean,
};
export function ChyronContainer({ debug = false }: ChyronContainerProps) {
  const { chyrons } = useSelector(broadcastGraphicsSelector);
  const { debugDurationMultiplier } = useSelector(workspaceSelector);

  if (chyrons == null || chyrons.driver == null) return null;

  const primary = (
    <ChyronDriver
      chyronData={chyrons.driver.primary}
      subMode={chyrons.subMode}
      openState={chyrons.openState}
      debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
    />
  );
  if (chyrons.subMode === "medium" && chyrons.driver.secondary) {
    return (
      <DoubleChyronContainer>
        {primary}
        <ChyronDriver
          chyronData={chyrons.driver.secondary}
          subMode={chyrons.subMode}
          openState={chyrons.openState}
          debugDurationMultiplier={debug ? debugDurationMultiplier : 1}
        />
      </DoubleChyronContainer>
    );
  } else {
    return primary;
  }
}
