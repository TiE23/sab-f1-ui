import styled from "styled-components/macro";

import { Placement } from "../../../../types/style";
import { placementStyleRules } from "../../../../utils/styling";

export const DoubleChyronContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1196px;
`;


type ChyronPlacementProps = {
  placement: Placement,
};
export const ChyronPlacement = styled.div<ChyronPlacementProps>`
  position: absolute;
  ${({ placement }) => placementStyleRules(placement)}
`;
