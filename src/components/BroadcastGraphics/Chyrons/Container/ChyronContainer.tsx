import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";

import { ChyronDriver } from "../Driver";
import { DoubleChyronContainer } from "./styles";

export function ChyronContainer() {
  const { chyrons } = useSelector(broadcastGraphicsSelector);

  if (chyrons == null || chyrons.driver == null) return null;

  const primary = (
    <ChyronDriver
      chyronData={chyrons.driver.primary}
      subMode={chyrons.subMode}
    />
  );
  if (chyrons.subMode === "medium" && chyrons.driver.secondary) {
    return (
      <DoubleChyronContainer>
        {primary}
        <ChyronDriver
          chyronData={chyrons.driver.secondary}
          subMode={chyrons.subMode}
        />
      </DoubleChyronContainer>
    );
  } else {
    return primary;
  }
}
