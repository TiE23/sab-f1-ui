import { AngledFlag } from "../../BroadcastGraphics/Common/AngledFlag";
import { BasicBlock } from "./styles";

export function AngledFlagWorkSpace() {
  return (
    <BasicBlock width={750} height={450} color="rgba(30, 30, 30, .7)">
      <AngledFlag
        flagMode="country"
        flag="GBR"
        flagHeight={64}
      />
      <AngledFlag
        flagMode="country"
        flag="MEX"
        flagHeight={128}
      />
    </BasicBlock>
  );
}
