import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@bedrock-layout/stack";
import { Inline } from "@bedrock-layout/inline";
import { FaPlay, FaStepForward, FaStop } from "react-icons/fa";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";
import {
  chyronsClear,
  chyronsOpenStateIncrement,
  chyronsSet,
} from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { flagModeList, getChyronModesList, getChyronSubModesList } from "../../../../domain/data/broadcastGraphics";
import { BGChyronDriver, BGChyronMode, BGChyrons, BGChyronSubMode, Car, FlagMode } from "../../../../types/state";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";
import { Button, CloseButton, OpenButton, Title } from "./styles";
import { Toggle } from "../../../Common/Inputs/Toggle";

export function ChyronsDirectorControls() {
  // Use state to prevent unnecessary resetting on re-renders.
  const [chyronModes] = useState<Array<BGChyronMode>>(getChyronModesList());
  const [chyronSubModes, setChyronSubModes] = useState<Array<BGChyronSubMode>>([]);

  // Interface states.
  const [chyronMode, setChyronMode] = useState<BGChyronMode>("driver");
  const [chyronSubMode, setChyronSubMode] = useState<BGChyronSubMode>("medium");
  const [posFlag, setPosFlag] = useState(true);
  const [driverNum, setDriverNum] = useState(true);
  const [portrait, setPortrait] = useState(false);
  const [flagMode, setFlagMode] = useState<FlagMode>("country");

  // Central state.
  const dispatch = useDispatch();
  const { chyrons } = useSelector(broadcastGraphicsSelector);
  const { selectedCars } = useSelector(broadcastDirectorSelector);

  useEffect(() => {
    setChyronSubModes(getChyronSubModesList(chyronMode));
  }, [chyronMode]);

  const onOpen = () => {
    if (chyronMode === "driver") {
      if (selectedCars.length === 0) return;
      let primaryCar = selectedCars[0];
      let secondaryCar = selectedCars.length > 1 ? selectedCars[1] : null;

      // Auto-sort drivers by position so trailing car always appears second.
      if (chyronSubMode === "medium" && secondaryCar != null
       && secondaryCar.position < primaryCar.position) {
        secondaryCar = selectedCars[0];
        primaryCar = selectedCars[1];
      }
      const newChyrons: BGChyrons = {
        openState: 1,
        relativePos: { top: "0", right: "0", bottom: "0", left: "0" },
        mode: chyronMode,
        subMode: chyronSubMode,
        driver: {
          primary: buildDriverChyron(primaryCar),
          secondary: secondaryCar != null ? buildDriverChyron(secondaryCar) : null,
        },
      };
      dispatch(chyronsSet(newChyrons));
    }
  };

  const onNext = () => {
    dispatch(chyronsOpenStateIncrement());
  };

  const onClose = () => {
    dispatch(chyronsClear());
  };

  const buildDriverChyron = (car: Car): BGChyronDriver => ({
    car,
    flagMode,
    showPosFlag: posFlag,
    showDriverNumber: driverNum,
    showPortrait: chyronSubMode === "large" ? false : portrait,
  });

  const modeControls = (mode: BGChyronMode, subMode: BGChyronSubMode) => {
    if (mode === "driver") {
      return (
        <InlineCluster gutter="md">
          <Toggle
            label="Pos. Flag"
            toggled={posFlag}
            onToggle={setPosFlag}
          />
          <Toggle
            label="Driver Num."
            toggled={driverNum}
            onToggle={setDriverNum}
          />
          {subMode === "medium" && (
            <Toggle
              label="Portrait"
              toggled={portrait}
              onToggle={setPortrait}
            />
          )}
          <SlotSelector
            label="Flag Mode"
            items={flagModeList}
            onChange={index => setFlagMode(flagModeList[index])}
            slotWidth="12ch"
          />
        </InlineCluster>
      );
    } else {
      return null;
    }
  };

  return (
    <Stack gutter="md">
      <Inline gutter="md" stretch={1}>
        <Title>Chyrons</Title>
        <Inline gutter="md" stretch="all">
          <SlotSelector
            items={chyronModes}
            onChange={index => setChyronMode(chyronModes[index])}
          />
          <SlotSelector
            items={chyronSubModes}
            onChange={index => setChyronSubMode(chyronSubModes[index])}
          />
        </Inline>
        <Inline gutter="sm">
          <OpenButton
            onClick={onOpen}
            disabled={chyrons != null}
          >
            <FaPlay size="0.8em" />
          </OpenButton>
          <Button
            onClick={onNext}
            disabled={chyrons == null}
          >
            <FaStepForward size="0.8em" />
          </Button>
          <CloseButton
            onClick={onClose}
            disabled={chyrons == null}
          >
            <FaStop size="0.8em" />
          </CloseButton>
        </Inline>
      </Inline>
      {modeControls(chyronMode, chyronSubMode)}
    </Stack>
  );
}
