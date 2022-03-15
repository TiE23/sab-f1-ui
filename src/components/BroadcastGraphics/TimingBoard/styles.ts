import styled from "styled-components/macro";

import { Placement } from "../../../types/style";
import { placementStyleRules } from "../../../utils/styling";

type TimingBoardLayoutProps = {
  placement: Placement,
};
export const TimingBoardLayout = styled.div<TimingBoardLayoutProps>`
  position: relative;
  ${({ placement }) => placementStyleRules(placement)}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
