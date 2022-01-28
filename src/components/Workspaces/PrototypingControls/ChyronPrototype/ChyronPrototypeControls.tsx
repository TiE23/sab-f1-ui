import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { ChyronsDirectorControls } from "../../../Broadcast/BroadcastDirectorUI/Chyrons";

import { GridSelection } from "../GridSelection";
import { ChyronControlsContainer } from "./styles";

export function ChyronPrototypeControls() {
  return (
    <Split gutter="md">
      <PadBox padding="md">
        <ChyronControlsContainer>
          <ChyronsDirectorControls />
        </ChyronControlsContainer>
      </PadBox>
      <PadBox padding="md">
        <GridSelection />
      </PadBox>
    </Split>
  );
}
