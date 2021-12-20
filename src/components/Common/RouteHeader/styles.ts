import styled from "styled-components";

export const HeaderBar = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 0 0.3em;
  background-color: ${p => p.theme.colors.grey};
  height: 20px;
  font-family: ${p => p.theme.fonts.accent};
  font-size: 0.8em;
`;
