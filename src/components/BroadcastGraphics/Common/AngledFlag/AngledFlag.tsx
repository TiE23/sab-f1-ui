import { FlagMode } from "../../../../types/state";
import { Px } from "../../../../types/style";
import { Container, NationalFlag, Slant, Sheen, NationalFlagEdge } from "./styles";

const flags = require.context("../../../../public/images/flags/angled", true);
const logos = require.context("../../../../public/images/logos", true);

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
  return (
    <Container width={flagHeight * 6} height={flagHeight * 3}>
      <Slant x={0} height={flagHeight * 3} girth={flagHeight * 2.4} />
      {flagMode === "country" ? (
        <>
          <NationalFlag
            alt=""
            src={flags(`./${flag}.svg`)}
            height={flagHeight}
          />
          <NationalFlagEdge
            x={-(flagHeight / 2) + ((flagHeight * 0.07) / 2)}
            height={flagHeight}
            girth={flagHeight * 0.07}
          />
        </>
      ) : null}
      <Sheen x={-10} height={flagHeight * 3} girth={flagHeight * 1.1} />
    </Container>
  );
}
