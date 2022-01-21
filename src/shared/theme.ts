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
    activeGreen: "#65c466",
    grey: "#aaa",
    lightGrey: "#ddd",
    faintGrey: "#eee",
    darkGrey: "#303030",
    videoFrameBG: "#333",
    teams: {
      alfaRomeo: "#900000",
      alphaTauri: "#2b4562",
      alpine: "#0090ff",
      astonMartin: "#006f62",
      ferrari: "#dc0000",
      haas: "#fff",
      mclaren: "#ff9800",
      mercedes: "#00d2be",
      redbull: "#0600ef",
      williams: "#005aff",
    },
  },
  design: {
    button: {
      borderRadius: "0.25rem",
    },
  },
  graphics: {
    medRadius: "11px",
    smRadius: "7px",
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
`;
