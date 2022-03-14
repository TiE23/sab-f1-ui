import styled from "styled-components/macro";

type MockupBlockProps = {
  color: string,
  height?: string,
  width?: string,
  minWidth?: string,
  minHeight?: string,
};

export const MockupBlock = styled.div<MockupBlockProps>`
  min-height: ${({ minHeight }) => minHeight ?? "0"};
  min-width: ${({ minWidth }) => minWidth ?? "0"};
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
  background-color: ${({ color }) => color};
  padding: 0.3em;
`;
