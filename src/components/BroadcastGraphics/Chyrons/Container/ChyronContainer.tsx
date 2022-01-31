import { Inline } from "@bedrock-layout/inline";
import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";

import { ChyronDriver } from "../Driver";
import { Spacer } from "./styles";

export function ChyronContainer() {
  const { chyrons } = useSelector(broadcastGraphicsSelector);

  if (chyrons == null || chyrons.driver == null) return null;

  return (
    <Inline gutter="none">

      <ChyronDriver
        chyronData={chyrons.driver.primary}
        subMode={chyrons.subMode}
      />
      {chyrons.subMode == "medium" && chyrons.driver.secondary && (
        <>
          <Spacer />
          <ChyronDriver
            chyronData={chyrons.driver.secondary}
            subMode={chyrons.subMode}
          />
        </>
      )}
    </Inline>
  );
}
