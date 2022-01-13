import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PadBox } from "@bedrock-layout/padbox";

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
  const { overlayIds, visible, currentOverlayItem } = useSelector(overlayToolSelector);




  /* For prototyping use only */
  const [idNum, setIdNum] = useState(0);

  const nextIdNum = () => {
    const nextIdNum = (idNum + 1) % overlayIds.length;
    setIdNum(nextIdNum);
    dispatch(setCurrentOverlayId(overlayIds[nextIdNum]));
  };
  /* For prototyping use only */



  const onToggle = (value: boolean) => {
    if (currentOverlayItem == null) {
      dispatch(initNewOverlayItem({
        overlayId: overlayIds[idNum],
        initialPosition: { x: 400, y: 300 },
        setVisible: true,
      }));
    } else {
      dispatch(setVisibility(value));
    }
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
        onClick={nextIdNum}
      >
        Id #{idNum}: &quot;{overlayIds[idNum]}&quot;
      </a>
      {/* For prototyping use only */}

    </PadBox>
  );
}
