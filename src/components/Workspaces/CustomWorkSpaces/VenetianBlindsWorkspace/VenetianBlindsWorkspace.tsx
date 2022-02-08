import { useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";

import { theme } from "../../../../shared/theme";
import { BasicBlock } from "../styles";

import { DriverPortrait } from "../../../BroadcastGraphics/Common/DriverPortrait";
import { PositionFlag } from "../../../BroadcastGraphics/Common/PositionFlag";
import { VenetianBlindsTransition } from "../../../BroadcastGraphics/Common/VenetianBlindsTransition";

export function VenetianBlindsWorkspace() {
  const { prototypeState } = useSelector(workspaceSelector);

  const bgColor = prototypeState?.venetianTransition?.showBG ?? true
    ? "black" : "transparent";

  return (
    <BasicBlock width={450} height={450} color={bgColor} >
      {prototypeState?.venetianTransition?.mode === "driverPortrait" ? (
        <VenetianBlindsTransition
          blindsColor={theme.colors.teams.redBull}
          blindsColorFadeDuration={600}
          blindsColorFadeDelay={300}
          blindsAngle={-45}
          blindsOpenDuration={600}
          blindsOpenDelay={600}
          blindsSize={{ transparent: 2, opaque: 5 }}
          wipeAngle={45}
          wipeDuration={600}
          wipeStartingCorner="topLeft"
        >
          <DriverPortrait
            driverId="verstappen"
            height={250}
          />
        </VenetianBlindsTransition>
      ) : (
        <VenetianBlindsTransition
          blindsColor="#f60d0d"
          blindsColorFadeDuration={300}
          blindsColorFadeDelay={200}
          blindsAngle={-45}
          blindsOpenDuration={100}
          blindsOpenDelay={100}
          blindsSize={{ transparent: 3, opaque: 6 }}
          wipeAngle={40}
          wipeDuration={300}
          wipeStartingCorner="bottomRight"
          opacityStart={0.1}
          opacityDuration={200}
          opacityDelay={100}
          spanBlinkDuration={500}
        >
          <PositionFlag size={122} number={1} />
        </VenetianBlindsTransition>
      )}
    </BasicBlock>
  );
}
