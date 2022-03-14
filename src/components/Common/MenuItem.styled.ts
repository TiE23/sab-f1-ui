import styled, { css } from "styled-components/macro";
import { PadBox } from "@bedrock-layout/padbox";

const hoverRules = css`
  background: ${p => p.theme.colors.darkGrey};
  color: white;
`;

type MenuItemProps = {
  isHovered?: boolean,
  isActive?: boolean,
};
export const MenuItem = styled(PadBox).attrs(() => ({
  padding: ["sm", "lg"],
}))<MenuItemProps>`
  border-radius: ${p => p.theme.design.button.borderRadius};
  color: ${p => p.theme.colors.darkGrey};
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 0.8em;

  ${({ isActive }) => isActive && css`
    background: ${p => p.theme.colors.lightGrey};
  `}
  ${({ isHovered }) => {
    // My cheap way of having uncontrolled hover behavior.
    if (isHovered == null) {
      return css`
        &:hover {
          ${hoverRules}
        }
      `;
    } else if (isHovered === true) {
      return hoverRules;
    }
  }}
`;

