import { theme } from "../../../../shared/theme";
import { OpenState } from "../../../../types/state";
import { DebugDurationProps } from "../../../../types/style";
import { LogoImage, GemBackground, GemContainer } from "./styles";

import rolexLogo from "../../../../public/images/logos/rolex-yellow.svg";

type RolexGemProps = DebugDurationProps & {
  openState: OpenState,
};
export function RolexGem({
  openState,
  debugDurationMultiplier: DDM = 1.0,
}: RolexGemProps) {
  return (
    <GemContainer
      open={openState > 0}
      transitionProps={[{
        property: "opacity",
        duration: theme.design.rolexGem.fadeInDurationMs * DDM,
        delay: theme.design.rolexGem.fadeInDelayMs * DDM,
      }]}
    >
      <GemBackground>
        <LogoImage
          src={rolexLogo}
          open={openState !== 0}
          transitionProps={[{
            property: "height",
            duration: theme.design.rolexGem.fadeInDurationMs * 2 * DDM,
            delay: theme.design.rolexGem.fadeInDelayMs * DDM,
            timing: "ease-out",
          }, {
            property: "opacity",
            duration: theme.design.rolexGem.fadeInDurationMs * 2 * DDM,
            delay: theme.design.rolexGem.fadeInDelayMs * 1.2 * DDM,
          }]}
        />
      </GemBackground>
    </GemContainer>
  );
}
