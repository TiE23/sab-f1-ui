import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { useDispatch, useSelector } from "react-redux";

import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { updateVenetianTransition } from "../../../../features/workspace/workspaceSlice";
import { VenetianTransitionWorkspaceMode } from "../../../../types/state";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";
import { Toggle } from "../../../Common/Inputs/Toggle";

const modes: Array<VenetianTransitionWorkspaceMode> = [
  "positionFlag",
  "driverPortrait",
];

export function VenetianBlindsPrototypeControls() {
  const dispatch = useDispatch();
  const { prototypeState } = useSelector(workspaceSelector);

  const onChange = (index: number) => {
    dispatch(updateVenetianTransition({
      mode: modes[index],
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
        onChange={onChange}
        label="Mode"
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
