import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@bedrock-layout/stack";
import { Inline } from "@bedrock-layout/inline";
import { FaCheck, FaStepForward, FaTimes } from "react-icons/fa";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { broadcastDirectorSelector } from "../../../../features/broadcast/director/broadcastDirectorSelector";
import { eventSelector } from "../../../../features/event/eventSelector";
import {
  incrementChyronsOpenState,
  setChyrons,
  setChyronsOpenState,
} from "../../../../features/broadcast/graphics/broadcastGraphicsSlice";
import { flagModeList, getChyronModesList, getChyronSubModesList } from "../../../../domain/data/broadcastGraphics";
import { BGChyronDriver, BGChyronMode, BGChyrons, BGChyronSubMode, FlagMode, GridSpot } from "../../../../types/state";

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
  const { grid } = useSelector(eventSelector);

  // Handle changes to the chyron mode so submodes can be changed accordingly.
  useEffect(() => {
    setChyronSubModes(getChyronSubModesList(chyronMode));
  }, [chyronMode]);

  const onOpen = () => {
    buildDriver();
    setTimeout(() => {
      // Delay a short time and increment the open state so the animation can happen.
      dispatch(incrementChyronsOpenState());
    }, 50);
  };

  const onNext = () => {
    dispatch(incrementChyronsOpenState());
  };

  const onClose = () => {
    dispatch(setChyronsOpenState(-1));
  };

  const buildDriver = () => {
    if (selectedCars.length === 0) return;
    let primaryCarGridSpot = selectedCars[0];
    let secondaryCarGridSpot = selectedCars[1] ?? -1;

    // Auto-sort drivers by position so trailing car appears second on mounting.
    if (chyronSubMode === "medium" && secondaryCarGridSpot != -1
      && grid[secondaryCarGridSpot].position < grid[primaryCarGridSpot].position) {
      secondaryCarGridSpot = selectedCars[0];
      primaryCarGridSpot = selectedCars[1];
    }

    const newChyrons: BGChyrons = {
      openState: 0,
      mode: chyronMode,
      subMode: chyronSubMode,
      driver: {
        primary: buildDriverChyron(primaryCarGridSpot),
        secondary: secondaryCarGridSpot !== -1
          ? buildDriverChyron(secondaryCarGridSpot) : null,
      },
    };
    dispatch(setChyrons(newChyrons));
  };

  const buildDriverChyron = (carGridSpot: GridSpot): BGChyronDriver => ({
    carGridSpot,
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
            <FaCheck size="0.8em" />
          </OpenButton>
          <Button
            onClick={onNext}
            disabled={chyrons == null || chyrons.openState === -1}
          >
            <FaStepForward size="0.8em" />
          </Button>
          <CloseButton
            onClick={onClose}
            disabled={chyrons == null || chyrons.openState <= 0}
          >
            <FaTimes size="0.8em" />
          </CloseButton>
        </Inline>
      </Inline>
      {modeControls(chyronMode, chyronSubMode)}
    </Stack>
  );
}
