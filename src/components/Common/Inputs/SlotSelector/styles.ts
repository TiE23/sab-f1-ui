import styled from "styled-components";

export const SlotWindow = styled.div`
  position: relative;
  height: 1.7em;
  width: auto;

  border-radius: 0.6em;
  background-color: white;
  box-shadow: inset 0 0 50px -50px ${p => p.theme.colors.darkGrey};
  border: 1px solid ${p => p.theme.colors.darkGrey};

  cursor: pointer;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SlotText = styled.span`
  position: absolute;
  display: block;
  margin-left: .4em;
  font-family: ${p => p.theme.fonts.f1Regular};
  color: ${p => p.theme.colors.darkGrey};
  user-select: none;
`;
