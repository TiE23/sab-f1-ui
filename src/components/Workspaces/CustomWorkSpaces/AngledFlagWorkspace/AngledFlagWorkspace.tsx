import { useSelector } from "react-redux";

import { workspaceSelector } from "../../../../features/workspace/workspaceSelector";
import { FlagMode, TeamId } from "../../../../types/state";

import { AngledFlag } from "../../../BroadcastGraphics/Common/AngledFlag";
import { BasicBlock } from "../styles";

type AngledFlagWorkspaceProps = {
  flagMode: FlagMode,
};
export function AngledFlagWorkspace({ flagMode }: AngledFlagWorkspaceProps) {
  const { prototypeState } = useSelector(workspaceSelector);
  if (flagMode === "none") return null;

  const defaultTeam: TeamId = "alfaRomeo";

  return (
    <BasicBlock width={750} height={450} color="rgba(30, 30, 30, .7)">
      {flagMode === "country" ? (
        <>
          <AngledFlag
            flagProps={{
              flagMode,
              flag: prototypeState?.angledFlagCountry?.flagA ?? "GBR",
            }}
            flagHeight={64}
          />
          <AngledFlag
            flagProps={{
              flagMode,
              flag: prototypeState?.angledFlagCountry?.flagB ?? "GBR",
            }}
            flagHeight={128}
          />
        </>
      ) : flagMode === "team" ? (
        <>
          <AngledFlag
            flagProps={{
              flagMode,
              flag: prototypeState?.angledFlagTeam?.flagA ?? defaultTeam,
            }}
            flagHeight={64}
          />
          <AngledFlag
            flagProps={{
              flagMode,
              flag: prototypeState?.angledFlagTeam?.flagB ?? defaultTeam,
            }}
            flagHeight={128}
          />
        </>

      ) : null}
    </BasicBlock>
  );
}
