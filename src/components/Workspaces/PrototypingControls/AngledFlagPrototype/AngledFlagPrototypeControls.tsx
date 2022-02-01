import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch, useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";

import { setPrototypeState } from "../../../../features/workspace/workspaceSlice";
import { FlagMode, TeamId } from "../../../../types/state";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";

const countries = [
  "GBR", "NLD", "FIN", "JPN", "FRA", "DEU", "MEX", "POL", "MCO", "CHN", "THA",
  "CAN", "RUS", "RAF", "AUS", "ESP", "ITA",
];
const teams: Array<TeamId> = [
  "alpine", "alfaRomeo", "alphaTauri", "astonMartin", "haas", "ferrari",
  "mclaren", "mercedes", "redBull", "williams",
];

type AngledFlagPrototypeControlsProps = {
  flagMode: FlagMode,
};
export function AngledFlagPrototypeControls({ flagMode }: AngledFlagPrototypeControlsProps) {
  const dispatch = useDispatch();
  const { prototypeState } = useSelector(workspaceSelector);
  const flagList = flagMode === "country" ? countries : flagMode === "team" ? teams : [];

  const onChange = (flag: "flagA" | "flagB") => (index: number) => {
    if (flagMode === "country") {
      dispatch(setPrototypeState({
        angledFlagCountry: {
          flagA: flag === "flagA" ? countries[index] : prototypeState?.angledFlagCountry?.flagA ?? "GBR",
          flagB: flag === "flagB" ? countries[index] : prototypeState?.angledFlagCountry?.flagB ?? "GBR",
        },
      }));
    } else if (flagMode === "team") {
      dispatch(setPrototypeState({
        angledFlagTeam: {
          flagA: flag === "flagA" ? teams[index] : prototypeState?.angledFlagTeam?.flagA ?? "alpine",
          flagB: flag === "flagB" ? teams[index] : prototypeState?.angledFlagTeam?.flagB ?? "alpine",
        },
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
