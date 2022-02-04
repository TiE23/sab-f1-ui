import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import { useDispatch, useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { setPrototypeState } from "../../../../features/workspace/workspaceSlice";
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
    dispatch(setPrototypeState({
      venetianTransition: {
        mode: modes[index],
        showBG: prototypeState?.venetianTransition?.showBG ?? false,
      },
    }));
  };

  const onToggle = (value: boolean) => {
    dispatch(setPrototypeState({
      venetianTransition: {
        mode: prototypeState?.venetianTransition?.mode ?? "positionFlag",
        showBG: value,
      },
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
        toggled={prototypeState?.venetianTransition?.showBG ?? false}
        onToggle={onToggle}
        label="Show BG"
      />
    </InlineCluster>
  );
}
