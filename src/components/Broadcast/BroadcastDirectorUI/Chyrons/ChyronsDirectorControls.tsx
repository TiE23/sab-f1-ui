import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPlay, FaStepForward, FaStop } from "react-icons/fa";
import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";

import { flagModeList, getChyronModesList, getChyronSubModesList } from "../../../../domain/data/broadcastGraphics";
import { BGChyronMode, BGChyronSubMode, FlagMode } from "../../../../types/state";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";
import { Button, CloseButton, OpenButton, SlotContainer, Title } from "./styles";
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

  const dispatch = useDispatch();
  const { chyrons } = useSelector(broadcastGraphicsSelector);

  useEffect(() => {
    setChyronSubModes(getChyronSubModesList(chyronMode));
  }, [chyronMode]);

  const onLaunch = () => {
    const x = 0;
    return x;
  };

  return (
    <InlineCluster gutter="md">
      <Title>Chyrons</Title>
      <SlotContainer width={100}>
        <SlotSelector
          items={chyronModes}
          onChange={index => setChyronMode(chyronModes[index])}
        />
      </SlotContainer>
      <SlotContainer width={100}>
        <SlotSelector
          items={chyronSubModes}
          onChange={index => setChyronSubMode(chyronSubModes[index])}
        />
      </SlotContainer>
      <OpenButton
        disabled={false}
      >
        <FaPlay size="0.8em" />
      </OpenButton>
      <Button
        disabled={false}
      >
        <FaStepForward size="0.8em" />
      </Button>
      <CloseButton
        disabled={false}
      >
        <FaStop size="0.8em" />
      </CloseButton>
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
      <Toggle
        label="Portrait"
        toggled={portrait}
        onToggle={setPortrait}
      />
      <SlotContainer width={200}>
        <SlotSelector
          label="Flag Mode"
          items={flagModeList}
          onChange={index => setFlagMode(flagModeList[index])}
        />
      </SlotContainer>
    </InlineCluster>
  );
}
