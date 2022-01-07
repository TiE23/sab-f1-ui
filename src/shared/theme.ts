import { createGlobalStyle, ThemeProps } from "styled-components";

export const theme = {
  fonts: {
    basic: "Helvetica, sans-serif",
    f1: "Formula1, sans-serif",
    f1Regular: "\"Formula1 Regular\", sans-serif",
    f1Bold: "\"Formula1 Bold\", sans-serif",
    f1Italic: "\"Formula1 Italic\", sans-serif",
    f1Black: "\"Formula1 Black\", sans-serif",
    f1Wide: "\"Formula1 Wide\", sans-serif",
  },
  colors: {
    orange: "#f4ae40",
    blue: "#387af5",
    pink: "#eb57a3",
    grey: "#aaa",
    lightGrey: "#ddd",
    darkGrey: "#303030",
    videoFrameBG: "#333",
  },
  design: {
    button: {
      borderRadius: "0.25rem",
    },
  },
};

export type MainThemeProps = ThemeProps<typeof theme>;
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before { box-sizing: border-box; }

  h1, h2, h3, h4, h5, h6 { margin: 0; }

  input,
  textarea,
  button {
    font-family: ${p => p.theme.fonts.basic};
  }

  .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
  }
`;
