import { FlagMode } from "../../../../types/state";
import { Px } from "../../../../types/style";
import {
  Container,
  Slant,
  Sheen,
  CountryFlagEdge,
  CountryFlagDiv,
  FlagContainer,
} from "./styles";

const countryFlags = require.context("../../../../public/images/countryFlags/angled", true);
// const teamLogos = require.context("../../../../public/images/teamLogos", true);

/**
 * To look right, country flags need to be 2:1. Additional editing will be
 * necessary for some flags to not cut off prominent elements. Ex: China's flag
 * would have its stars mostly cut out without edits to place them closer to the
 * center.
 */
type AngledFlagProps = {
  flagMode: FlagMode,
  flag: string,
  flagHeight: Px,
};
export function AngledFlag({ flagMode, flag, flagHeight }: AngledFlagProps) {
  const topFlag = flagMode === "country"
    ? (
      <CountryFlagDiv
        src={countryFlags(`./${flag}.svg`)}
        height={flagHeight}
        width={flagHeight * 2}
      >
        <CountryFlagEdge
          x={flagHeight / 2}
          height={flagHeight}
          girth={flagHeight * 0.07}
        />
      </CountryFlagDiv>
    ) : null; // Team flag here

  const bottomFlag = flagMode === "country"
    ? (
      <CountryFlagDiv
        src={countryFlags(`./${flag}.svg`)}
        height={flagHeight}
        width={flagHeight * 2}
        xOffset={-flagHeight * 0.005}
      />
    ) : null; // Team flag here

  return (
    <Container width={flagHeight * 6} height={flagHeight * 3}>
      <Slant x={0} height={flagHeight * 3} girth={flagHeight * 2.4} />
      <FlagContainer
        height={flagHeight}
        width={flagHeight * 2}  // Dynamic width...
        collapsedWidth={flagHeight * 2}
        masked
      >
        <FlagContainer
          height={flagHeight}
          width={flagHeight * 2}
          collapsedWidth={flagHeight * 2}
          topFlag
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
