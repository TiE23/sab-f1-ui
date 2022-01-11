import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PadBox } from "@bedrock-layout/padbox";

import { appDimensionsSelector } from "../../../features/pageDimensions/pageDimensionsSelector";
import { overlayToolSelector } from "../../../features/overlayTool/overlayToolSelector";
import {
  initNewOverlayItem,
  setCurrentOverlayId,
  setPosition,
  setVisibility,
} from "../../../features/overlayTool/overlayToolSlice";

import { Toggle } from "../../Common/Inputs/Toggle";


export function OverlayControl() {
  const dispatch = useDispatch();
  const { visible, currentOverlayItem } = useSelector(overlayToolSelector);




  /* For prototyping use only */
  const { width: appWidth, height: appHeight } = useSelector(appDimensionsSelector);
  const [overlayId, setOverlayId] = useState("foo_1.00000");
  const { width, height } = useSelector(appDimensionsSelector);

  const getRandomArbitrary = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const posRandomizer = () => {
    dispatch(setPosition({
      x: Math.floor(getRandomArbitrary(50, width - 50)),
      y: Math.floor(getRandomArbitrary(50, height - 50)),
    }));
  };
  const idRandomizer = () => {
    const newId = `id_${getRandomArbitrary(1, 10)}`.slice(0, 10);
    setOverlayId(newId);
    dispatch(setCurrentOverlayId(newId));
  };
  /* For prototyping use only */



  const onToggle = (value: boolean) => {
    if (currentOverlayItem == null) {
      dispatch(initNewOverlayItem({
        overlayId,
        appDimensions: { height: appHeight, width: appWidth },
      }));
    }
    dispatch(setVisibility(value));
  };

  return (
    <PadBox padding="sm">
      <Toggle
        label="Show Overlay"
        toggled={visible}
        onToggle={onToggle}
      />

      {/* For prototyping use only */}
      <br />
      <a
        onClick={posRandomizer}
      >
        Random Location
      </a>
      <br />
      <a
        onClick={idRandomizer}
      >
        Id: {overlayId}
      </a>
      {/* For prototyping use only */}

    </PadBox>
  );
}
