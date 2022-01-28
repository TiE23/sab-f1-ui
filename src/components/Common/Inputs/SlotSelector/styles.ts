import styled from "styled-components";

type SlotWindowProps = {
  disabled: boolean,
};
export const SlotWindow = styled.div<SlotWindowProps>`
  position: relative;
  height: 1.5em;
  width: auto;

  border-radius: 0.6em;
  background-color: ${({ disabled }) => disabled
    ? p => p.theme.colors.lightGrey : "white"};
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
  font-size: 0.9em;
  color: ${p => p.theme.colors.darkGrey};
  user-select: none;
`;
