import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch } from "react-redux";

import { updateAngledFlagCountry, updateAngledFlagTeam } from "../../../../features/workspace/workspaceSlice";
import { FlagMode, TeamId } from "../../../../types/state";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";

const countries = [
  "GBR", "NLD", "FIN", "JPN", "FRA", "DEU", "MEX", "POL", "MCO", "CHN", "THA",
  "CAN", "RUS", "RAF", "AUS", "ESP", "ITA",
];
const teams: Array<TeamId> = [
  "alfaRomeo", "alphaTauri", "alpine", "astonMartin", "ferrari", "haas",
  "mclaren", "mercedes", "redBull", "williams",
];

type AngledFlagPrototypeControlsProps = {
  flagMode: FlagMode,
};
export function AngledFlagPrototypeControls({ flagMode }: AngledFlagPrototypeControlsProps) {
  const dispatch = useDispatch();
  const flagList = flagMode === "country" ? countries : flagMode === "team" ? teams : [];

  const onChange = (flag: "flagA" | "flagB") => (index: number) => {
    if (flagMode === "country") {
      dispatch(updateAngledFlagCountry({
        [flag]: countries[index],
      }));
    } else if (flagMode === "team") {
      dispatch(updateAngledFlagTeam({
        [flag]: teams[index],
      }));
    }
  };
  return (
    <Split as={PadBox} gutter="md" padding="md">
      <SlotSelector label="64px" items={flagList} onChange={onChange("flagA")}/>
      <SlotSelector label="128px" items={flagList} onChange={onChange("flagB")}/>
    </Split>
  );
}
