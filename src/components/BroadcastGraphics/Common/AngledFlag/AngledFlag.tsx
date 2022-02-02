import { ReactNode } from "react";
import { TeamId } from "../../../../types/state";
import { Px } from "../../../../types/style";
import { getTeamFlagStyle } from "../../../../utils/dataLookup";
import {
  Container,
  Slant,
  Sheen,
  FlagEdge,
  CountryFlagDiv,
  FlagContainer,
  TeamFlagDiv,
} from "./styles";

const countryFlags = require.context("../../../../public/images/countryFlags/angled", true);
const teamLogos = require.context("../../../../public/images/logos/team", true);

const FLAG_WIDTH_TEAM = 2.4;
const FLAG_WIDTH_COUNTRY = 2;

/**
 * To look right, country flags need to be 2:1. Additional editing will be
 * necessary for some flags to not cut off prominent elements. Ex: China's flag
 * would have its stars mostly cut out without edits to place them closer to the
 * center.
 */
type AngledFlagProps = {
  flagHeight: Px,
  flagProps: {
    flagMode: "country",
    flag: string,
  } | {
    flagMode: "team",
    flag: TeamId,
  },
};
export function AngledFlag(props: AngledFlagProps) {
  const { flagProps, flagHeight } = props;

  let topFlag: ReactNode = null;
  let bottomFlag: ReactNode = null;

  if (flagProps.flagMode === "country") {
    topFlag = (
      <CountryFlagDiv
        src={countryFlags(`./${flagProps.flag}.svg`)}
        height={flagHeight}
        width={flagHeight * FLAG_WIDTH_COUNTRY}
      >
        <FlagEdge
          x={flagHeight / 2}
          height={flagHeight}
          girth={flagHeight * 0.07}
        />
      </CountryFlagDiv>
    );
    bottomFlag = (
      <CountryFlagDiv
        src={countryFlags(`./${flagProps.flag}.svg`)}
        height={flagHeight}
        width={flagHeight * FLAG_WIDTH_COUNTRY}
        xOffset={-flagHeight * 0.005}
      />
    );
  } else if (flagProps.flagMode === "team") {
    topFlag = (
      <TeamFlagDiv
        src={teamLogos(`./${flagProps.flag}.svg`)}
        height={flagHeight}
        width={flagHeight * FLAG_WIDTH_TEAM}
        style={getTeamFlagStyle(flagProps.flag)}
      >
        <FlagEdge
          x={flagHeight / 2}
          height={flagHeight}
          girth={flagHeight * 0.04}
        />
      </TeamFlagDiv>
    );
    bottomFlag = (
      <TeamFlagDiv
        src={teamLogos(`./${flagProps.flag}.svg`)}
        height={flagHeight}
        width={flagHeight * FLAG_WIDTH_TEAM}
        style={getTeamFlagStyle(flagProps.flag)}
        bottomFlag
      />
    );
  }

  const flagModeWidth = flagProps.flagMode === "team" ? FLAG_WIDTH_TEAM : FLAG_WIDTH_COUNTRY;

  return (
    <Container width={flagHeight * 6} height={flagHeight * 3}>
      <Slant x={0} height={flagHeight * 3} girth={flagHeight * 2.4} />
      <FlagContainer
        height={flagHeight}
        width={flagHeight * flagModeWidth}  // Dynamic width...
        collapsedWidth={flagHeight * flagModeWidth}
        masked
        teamFlag={flagProps.flagMode === "team"}
      >
        <FlagContainer
          height={flagHeight}
          width={flagHeight * flagModeWidth}
          collapsedWidth={flagHeight * flagModeWidth}
          topFlag
          teamFlag={flagProps.flagMode === "team"}
        >
          {topFlag}
        </FlagContainer>
        {bottomFlag}
      </FlagContainer>
      <Sheen
        x={-flagHeight / 6.4}
        height={flagHeight * 3}
        girth={flagHeight * 1.1}
      />
    </Container>
  );
}
