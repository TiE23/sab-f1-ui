import { useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { theme } from "../../../../shared/theme";
import { DriverPortrait } from "../../../BroadcastGraphics/Common/DriverPortrait";
import { PositionFlag } from "../../../BroadcastGraphics/Common/PositionFlag";
import { VenetianBlindsTransition } from "../../../BroadcastGraphics/Common/VenetianBlindsTransition";
import { BasicBlock } from "../styles";

export function VenetianBlindsWorkspace() {
  const { prototypeState } = useSelector(workspaceSelector);

  const bgColor = prototypeState?.venetianTransition?.showBG ?? true
    ? "black" : "transparent";

  return (
    <BasicBlock width={450} height={450} color={bgColor} >
      {prototypeState?.venetianTransition?.mode === "driverPortrait" ? (
        <VenetianBlindsTransition
          blindsColor={theme.colors.teams.mercedes + "b5"}
          blindsAngle={-45}
          wipeAngle={45}
          wipeDuration={500}
          wipeStartingCorner="topLeft"
        >
          <DriverPortrait
            driverId="hamilton"
            height={150}
          />
        </VenetianBlindsTransition>
      ) : (
        <VenetianBlindsTransition
          blindsColor="#f60d0db5"
          blindsAngle={-45}
          wipeAngle={35}
          wipeDuration={350}
          wipeStartingCorner="bottomRight"
        >
          <PositionFlag size={122} number={1} />
        </VenetianBlindsTransition>
      )}
    </BasicBlock>
  );
}
