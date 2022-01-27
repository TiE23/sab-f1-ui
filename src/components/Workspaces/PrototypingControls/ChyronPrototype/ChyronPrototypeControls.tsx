import { Grid } from "@bedrock-layout/grid";
import { PadBox } from "@bedrock-layout/padbox";

import { GridSelection } from "../GridSelection";

export function ChyronPrototypeControls() {
  return (
    <Grid gutter="md">
      <PadBox padding="md">
        <GridSelection />
      </PadBox>
      <span>Launcher/Closer</span>
    </Grid>
  );
}
