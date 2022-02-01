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
    dispatch(setPrototypeState({
      angledFlag: {
        flagA: flag === "flagA" ? flagList[index] : prototypeState?.angledFlag?.flagA ?? "GBR",
        flagB: flag === "flagB" ? flagList[index] : prototypeState?.angledFlag?.flagB ?? "GBR",
      },
    }));
  };
  return (
    <Split as={PadBox} gutter="md" padding="md">
      <SlotSelector label="64px" items={flagList} onChange={onChange("flagA")}/>
      <SlotSelector label="128px" items={flagList} onChange={onChange("flagB")}/>
    </Split>
  );
}
