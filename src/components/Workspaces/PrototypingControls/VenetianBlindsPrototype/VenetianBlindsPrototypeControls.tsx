import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { updateVenetianTransition } from "../../../../features/workspace/workspaceSlice";
import { DriverId } from "../../../../types/state";
import { Corner } from "../../../../types/style";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";
import { Toggle } from "../../../Common/Inputs/Toggle";


// NOTE: This is all hacky and 100% wouldn't fly in production code.
const modes = ["positionFlag", "driverPortrait"];
const subModes: [string[], DriverId[]] = [
  ["1", "3", "5", "10", "20"],
  ["hamilton", "verstappen", "schumacher", "alonso", "leclerc"],
];
const corners: Corner[] = ["bottomRight", "bottomLeft", "topLeft", "topRight"];

export function VenetianBlindsPrototypeControls() {
  const [modeIndex, setModeIndex] = useState(0);

  const dispatch = useDispatch();
  const { prototypeState } = useSelector(workspaceSelector);

  const changeMode = (index: number) => {
    setModeIndex(index);

    dispatch(updateVenetianTransition({
      mode: modes[index],
      subMode: subModes[index][0],
    }));
  };
  const changeSubMode = (index: number) => {
    dispatch(updateVenetianTransition({
      subMode: subModes[modeIndex][index],
    }));
  };
  const onChangeStartingCorner = (index: number) => {
    dispatch(updateVenetianTransition({
      wipeStartingCorner: corners[index],
    }));
  };

  const onToggle = (value: boolean) => {
    dispatch(updateVenetianTransition({
      showBG: value,
    }));
  };

  return (
    <InlineCluster as={PadBox} gutter="md" padding="md">
      <SlotSelector
        items={modes}
        onChange={changeMode}
        label="Mode"
        slotWidth="200px"
      />
      <SlotSelector
        items={subModes[modeIndex]}
        onChange={changeSubMode}
        label="SubMode"
        slotWidth="200px"
      />
      <SlotSelector
        items={corners}
        onChange={onChangeStartingCorner}
        label="Starting Corner"
        slotWidth="200px"
      />
      <Toggle
        toggled={prototypeState?.venetianTransition?.showBG ?? true}
        onToggle={onToggle}
        label="Show BG"
      />
    </InlineCluster>
  );
}
