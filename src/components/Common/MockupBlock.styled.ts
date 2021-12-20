import styled from "styled-components";

type MockupBlockProps = {
  color: string,
  height?: string,
  width?: string,
  minWidth?: string,
  minHeight?: string,
};

export const MockupBlock = styled.div<MockupBlockProps>`
  display: flex;
  min-height: ${({ minHeight }) => minHeight ?? "0"};
  min-width: ${({ minWidth }) => minWidth ?? "0"};
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
  background-color: ${({ color }) => color};
  flex: 1 1 auto;
`;
