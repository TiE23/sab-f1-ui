import styled from "styled-components";
import { Px } from "../../../../types/style";

export const Title = styled.h4`
  font-family: ${p => p.theme.fonts.f1Italic};
`;
Title.displayName = "Title";

type SlotContainerProps = {
  width: Px,
};
export const SlotContainer = styled.div<SlotContainerProps>`
  width: ${({ width }) => `${width}px`};
`;
SlotContainer.displayName = "SlotContainer";

type ButtonProps = {
  disabled: boolean,
};
export const Button = styled.button<ButtonProps>`
  font-family: ${p => p.theme.fonts.f1Regular};
  color: ${({ disabled }) => disabled
    ? p => p.theme.colors.grey : "black"};

  background-color: ${p => p.theme.colors.lightGrey};
  border-radius: ${p => p.theme.design.button.borderRadius};
  border: 1px black solid;

  cursor: pointer;
`;
Button.displayName = "Button";

export const OpenButton = styled(Button)<ButtonProps>`
  background-color: ${({ disabled }) => disabled
    ? p => p.theme.colors.disabledGreen : p => p.theme.colors.activeGreen};
`;
OpenButton.displayName = "OpenButton";

export const CloseButton = styled(Button)<ButtonProps>`
  background-color: ${({ disabled }) => disabled
    ? p => p.theme.colors.disabledRed : p => p.theme.colors.activeRed};
`;
CloseButton.displayName = "CloseButton";
