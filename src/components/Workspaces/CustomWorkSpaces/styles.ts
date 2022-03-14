import styled from "styled-components/macro";
import { Px } from "../../../types/style";

type BasicBlockProps = {
  width: Px,
  height: Px,
  color: string,
  center?: boolean,
}
export const BasicBlock = styled.div<BasicBlockProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  background-color: ${({ color }) => color};

  border-radius: 15px;
`;
