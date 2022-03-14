import styled from "styled-components/macro";

type SpacerProps = {
  width?: string,
  height?: string;
};
export const Spacer = styled.div<SpacerProps>`
  width: ${({ width = "0" }) => width};
  height: ${({ height = "0" }) => height};
`;
