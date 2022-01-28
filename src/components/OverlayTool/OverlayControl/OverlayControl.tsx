import { useSelector, useDispatch } from "react-redux";
import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";

import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import {
  initNewOverlayItem,
  setCurrentOverlayId,
  setOpacity,
  setVisibility,
} from "../../../features/overlayTool/overlayToolSlice";

import { Toggle } from "../../Common/Inputs/Toggle";
import { SlotSelector } from "../../Common/Inputs/SlotSelector";
import { ProgressSlider } from "../../Common/Inputs/ProgressSlider";


export function OverlayControl() {
  const dispatch = useDispatch();
  const { overlayIds, visible, currentOverlayItem } = useSelector(overlayToolSelector);

  const onToggleVisibility = (value: boolean) => {
    if (currentOverlayItem == null) {
      dispatch(initNewOverlayItem({
        overlayId: overlayIds[0],
        initialPosition: { x: 0, y: 0 },
        setVisible: true,
      }));
    } else {
      dispatch(setVisibility(value));
    }
  };

  const onChangeOpacity = (value: number) => {
    dispatch(setOpacity(value));
  };

  return (
    <Stack as={PadBox} gutter="md" padding="sm">
      <Inline gutter="md" stretch="end">
        <Toggle
          label="Show Overlay"
          toggled={visible}
          onToggle={onToggleVisibility}
        />
        <SlotSelector
          items={overlayIds}
          onChange={(index) => dispatch(setCurrentOverlayId(overlayIds[index]))}
          removePrefix
          formatter={(value) => value.replace(/(\.png)|(\.jpg)$/, "")}
          disabled={!visible}
        />
      </Inline>
      <ProgressSlider
        value={currentOverlayItem?.opacity ?? 1}
        onChange={onChangeOpacity}
        disabled={!visible}
      />
    </Stack>
  );
}
