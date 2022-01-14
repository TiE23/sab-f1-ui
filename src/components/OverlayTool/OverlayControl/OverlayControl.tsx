import { useSelector, useDispatch } from "react-redux";
import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";

import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import {
  initNewOverlayItem,
  setCurrentOverlayId,
  setVisibility,
} from "../../../features/overlayTool/overlayToolSlice";

import { Toggle } from "../../Common/Inputs/Toggle";
import { MockupBlock } from "../../Common/MockupBlock.styled";
import { SlotSelector } from "../../Common/Inputs/SlotSelector";


export function OverlayControl() {
  const dispatch = useDispatch();
  const { overlayIds, visible, currentOverlayItem } = useSelector(overlayToolSelector);

  const onToggle = (value: boolean) => {
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

  return (
    <Stack gutter="sm">
      <Inline gutter="sm" stretch="end">
        <Toggle
          label="Show Overlay"
          toggled={visible}
          onToggle={onToggle}
        />
        <PadBox padding="sm">
          <SlotSelector
            items={overlayIds}
            onChange={(value) => dispatch(setCurrentOverlayId(value))}
            removePrefix
            formatter={(value) => value.replace(/(\.png)|(\.jpg)$/, "")}
          />
        </PadBox>
      </Inline>
      <PadBox padding="sm">
        <MockupBlock color="green" height="1.5rem" width="100%">
          Opacity Slider
        </MockupBlock>
      </PadBox>
    </Stack>
  );
}
