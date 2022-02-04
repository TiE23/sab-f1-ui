import { useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { theme } from "../../../../shared/theme";
import { DriverPortrait } from "../../../BroadcastGraphics/Common/DriverPortrait";
import { PositionFlag } from "../../../BroadcastGraphics/Common/PositionFlag";
import { VenetianBlindsTransition } from "../../../BroadcastGraphics/Common/VenetianBlindsTransition";
import { BasicBlock } from "../styles";

export function VenetianBlindsWorkspace() {
  const { prototypeState } = useSelector(workspaceSelector);

  const bgColor = prototypeState?.venetianTransition?.showBG
    ? "black" : "transparent";

  return (
    <BasicBlock width={450} height={450} color={bgColor} >
      {prototypeState?.venetianTransition?.mode === "driverPortrait" ? (
        <VenetianBlindsTransition color={theme.colors.teams.mercedes + "b5"}>
          <DriverPortrait
            driverId="hamilton"
            height={150}
          />
        </VenetianBlindsTransition>
      ) : (
        <VenetianBlindsTransition color="#f60d0db5">
          <PositionFlag size={122} number={1} />
        </VenetianBlindsTransition>
      )}
    </BasicBlock>
  );
}
