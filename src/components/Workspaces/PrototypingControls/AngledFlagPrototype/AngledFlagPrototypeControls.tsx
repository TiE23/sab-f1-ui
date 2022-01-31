import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";
import { useDispatch, useSelector } from "react-redux";
import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";

import { setPrototypeState } from "../../../../features/workspace/workspaceSlice";

import { SlotSelector } from "../../../Common/Inputs/SlotSelector";

const countries = [
  "GBR", "NLD", "FIN", "JPN", "FRA", "DEU", "MEX", "POL", "MCO", "CHN", "THA",
  "CAN", "RUS", "RAF", "AUS", "ESP", "ITA",
];

export function AngledFlagPrototypeControls() {
  const dispatch = useDispatch();
  const { prototypeState } = useSelector(workspaceSelector);

  const onChange = (flag: "flagA" | "flagB") => (index: number) => {
    dispatch(setPrototypeState({
      angledFlag: {
        flagA: flag === "flagA" ? countries[index] : prototypeState?.angledFlag?.flagA ?? "GBR",
        flagB: flag === "flagB" ? countries[index] : prototypeState?.angledFlag?.flagB ?? "GBR",
      },
    }));
  };
  return (
    <Split as={PadBox} gutter="md" padding="md">
      <SlotSelector label="64px" items={countries} onChange={onChange("flagA")}/>
      <SlotSelector label="128px" items={countries} onChange={onChange("flagB")}/>
    </Split>
  );
}
