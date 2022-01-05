import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import styled, { css } from "styled-components";

export const Title = styled.h3`
  font-family: ${p => p.theme.fonts.f1Bold};
`;

export const MenuBar = styled(InlineCluster).attrs(() => ({
  as: PadBox,
  padding: ["xs", "lg"],
  stretch: 1,
  gutter: "lg",
  align: "center",
}))`
  background-image: linear-gradient(to right, #f0f0f0, #fff);
  border-block-end: 1px solid ${p => p.theme.colors.darkGrey};
`;

type MenuItemProps = {
  isHovered?: boolean,
  isActive?: boolean,
};
export const MenuItem = styled(PadBox).attrs(() => ({
  padding: ["sm", "lg"],
}))<MenuItemProps>`
  border-radius: 0.25rem;
  color: ${p => p.theme.colors.darkGrey};
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 0.8em;

  ${({ isActive }) => isActive && css`
    background: ${p => p.theme.colors.lightGrey};
  `}

  ${({ isHovered }) => isHovered && css`
    background: ${p => p.theme.colors.darkGrey};
    color: white;
  `}
`;
