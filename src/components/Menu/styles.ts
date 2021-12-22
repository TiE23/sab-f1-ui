import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

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
  active?: boolean,
};
export const MenuItem = styled(PadBox).attrs(() => ({
  as: "li",
  padding: ["sm", "lg"],
})) <MenuItemProps>`
  border-radius: 0.25rem;
  > a {
    color: ${p => p.theme.colors.darkGrey};
    text-decoration: none;
    font-weight: 900;
  }
  :hover {
    background: ${p => p.theme.colors.darkGrey};
    > a {
      color: white;
    }
  }
`;
