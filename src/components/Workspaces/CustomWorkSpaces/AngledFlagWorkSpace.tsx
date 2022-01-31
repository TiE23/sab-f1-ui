import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../features/workspace/workspaceSelector";
import { FlagMode } from "../../../types/state";

import { AngledFlag } from "../../BroadcastGraphics/Common/AngledFlag";
import { BasicBlock } from "./styles";

type AngledFlagWorkSpaceProps = {
  flagMode: FlagMode,
};
export function AngledFlagWorkSpace({ flagMode }: AngledFlagWorkSpaceProps) {
  const { prototypeState } = useSelector(workspaceSelector);

  return (
    <BasicBlock width={750} height={450} color="rgba(30, 30, 30, .7)">
      <AngledFlag
        flagMode={flagMode}
        flag={prototypeState?.angledFlag?.flagA ?? "GBR"}
        flagHeight={64}
      />
      <AngledFlag
        flagMode={flagMode}
        flag={prototypeState?.angledFlag?.flagB ?? "GBR"}
        flagHeight={128}
      />
    </BasicBlock>
  );
}
