import { useState } from "react";
import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { theme } from "../../../../shared/theme";
import { BasicBlock } from "../styles";
import { DriverId } from "../../../../types/state";
import { getDriver } from "../../../../utils/dataLookup";

import { DriverPortrait } from "../../../BroadcastGraphics/Common/DriverPortrait";
import { PositionFlag } from "../../../BroadcastGraphics/Common/PositionFlag";
import { VenetianBlindsTransition } from "../../../BroadcastGraphics/Common/VenetianBlindsTransition";

export function VenetianBlindsWorkspace() {
  const { prototypeState } = useSelector(workspaceSelector);

  const bgColor = prototypeState?.venetianTransition?.showBG ?? true
    ? "black" : "transparent";

  const [visible, setVisible] = useState(true);

  return (
    <BasicBlock width={450} height={450} color={bgColor} onClick={() => setVisible(!visible)} >
      {prototypeState?.venetianTransition?.mode === "driverPortrait" ? (
        <VenetianBlindsTransition
          visible={visible}
          blindsColor={theme.colors.teams[
            getDriver(  // This is very sus. This would not fly in production.
              prototypeState?.venetianTransition?.subMode as DriverId ?? "hamilton",
            ).team.id
          ]}
          blindsColorFadeDuration={600}
          blindsColorFadeDelay={300}
          blindsAngle={-45}
          blindsOpenDuration={600}
          blindsOpenDelay={600}
          blindsSize={{ transparent: 2, opaque: 5 }}
          wipeAngle={45}
          wipeDuration={600}
          wipeStartingCorner={
            prototypeState?.venetianTransition?.wipeStartingCorner ?? "bottomRight"
          }
        >
          <DriverPortrait
            driverId={prototypeState?.venetianTransition?.subMode as DriverId ?? "hamilton"}
            height={250}
          />
        </VenetianBlindsTransition>
      ) : (
        <VenetianBlindsTransition
          visible={visible}
          blindsColor="#f60d0d"
          blindsColorFadeDuration={300}
          blindsColorFadeDelay={200}
          blindsAngle={-45}
          blindsOpenDuration={100}
          blindsOpenDelay={150}
          blindsSize={{ transparent: 3, opaque: 6 }}
          wipeAngle={40}
          wipeDuration={300}
          wipeStartingCorner={
            prototypeState?.venetianTransition?.wipeStartingCorner ?? "bottomRight"
          }
          opacityStart={0.1}
          opacityDuration={200}
          opacityDelay={100}
          spanBlinkDuration={500}
        >
          <PositionFlag size={122} number={parseInt(prototypeState?.venetianTransition?.subMode ?? "1")} />
        </VenetianBlindsTransition>
      )}
    </BasicBlock>
  );
}
