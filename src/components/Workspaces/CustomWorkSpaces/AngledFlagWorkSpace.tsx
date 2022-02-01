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
  const defaultFlag = flagMode === "country" ? "GBR" : flagMode === "team" ? "alpine" : "";

  return (
    <BasicBlock width={750} height={450} color="rgba(30, 30, 30, .7)">
      <AngledFlag
        flagMode={flagMode}
        flag={prototypeState?.angledFlag?.flagA ?? defaultFlag}
        flagHeight={64}
      />
      <AngledFlag
        flagMode={flagMode}
        flag={prototypeState?.angledFlag?.flagB ?? defaultFlag}
        flagHeight={128}
      />
    </BasicBlock>
  );
}
