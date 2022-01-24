import { AngledFlag } from "../../BroadcastGraphics/Common/AngledFlag";
import { BasicBlock } from "./styles";

export function AngledFlagWorkSpace() {
  return (
    <BasicBlock width={400} height={400} color="rgba(30, 30, 30, .7)">
      <AngledFlag
        flagMode="country"
        flag="JPN"
        flagHeight={64}
      />
    </BasicBlock>
  );
}
