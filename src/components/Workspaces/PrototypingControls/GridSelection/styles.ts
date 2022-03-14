import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components/macro";

type GridItemProps = {
  selected: boolean,
};
export const GridItem = styled(PadBox).attrs(() => ({
  padding: ["md", "xs"],
}))<GridItemProps>`
  position: relative;
  width: 4.5ch;
  border-radius: 0.2em;

  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 0.8em;
  text-align: center;
  user-select: none;

  background-color: ${({ selected }) => selected
    ? p => p.theme.colors.grey
    : p => p.theme.colors.faintGrey};

  &:hover {
    background-color: ${({ selected }) => selected ? p => p.theme.colors.darkGrey : p => p.theme.colors.grey};
    > span {
      color: ${p => p.theme.colors.faintGrey};
    }
  }

  cursor: pointer;
`;

export const DriverLabel = styled.span`
  text-transform: uppercase;
`;

export const SelectionLabel = styled.span`
  position: absolute;
  bottom: 0;
  right: 5%;
  font-size: 0.3em;
`;
