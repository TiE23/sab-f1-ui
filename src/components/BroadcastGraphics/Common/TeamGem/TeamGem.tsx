import { TeamId } from "../../../../types/state";
import { Px } from "../../../../types/style";
import { getTeamGemStyle } from "../../../../utils/dataLookup";
import { GemColorDiv, GemContainer, GemLogoDiv } from "./styles";

const teamLogos = require.context("../../../../public/images/logos/team", true);

type TeamGemProps = {
  height: Px,
  team: TeamId,
};
export function TeamGem({ height, team }: TeamGemProps) {
  return (
    <GemContainer height={height}>
      <GemColorDiv
        height={height}
        gemStyle={getTeamGemStyle(team)}
      />
      <GemLogoDiv
        height={height}
        src={teamLogos(`./${team}.svg`)}
        gemStyle={getTeamGemStyle(team)}
      />
    </GemContainer>
  );
}
