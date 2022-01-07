import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

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
