import styled from "styled-components/macro";

export const NumberContainer = styled.div`
  position: relative;
  display: inline;
`;

type NumberProps = {
  fontFamily: string,
  fontSize: string,
  numberColor: string,
}
type StrokeNumberProps = NumberProps & {
  strokeColor: string,
  strokeWidth: string,
}
export const StrokeNumber = styled.span<StrokeNumberProps>`
  position: absolute;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ numberColor }) => numberColor};

  -webkit-text-stroke-color: ${({ strokeColor }) => strokeColor};
  -webkit-text-stroke-width: ${({ strokeWidth }) => strokeWidth};
`;

type ShadowNumberProps = NumberProps & {
  shadowProperties: string,
};
export const ShadowNumber = styled.span<ShadowNumberProps>`
  position: absolute;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ numberColor }) => numberColor};

  text-shadow: ${({ shadowProperties }) => shadowProperties};
`;
