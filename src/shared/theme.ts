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
    disabledGreen: "#b1d3b2",
    activeRed: "#e63746",
    disabledRed: "#e08a91",
    grey: "#aaa",
    lightGrey: "#ddd",
    faintGrey: "#eee",
    darkGrey: "#303030",
    videoFrameBG: "#333",
    teams: {  // 2021 Season
      alfaRomeo: "#900000",
      alphaTauri: "#2b4562",
      alpine: "#0090ff",
      astonMartin: "#006f62",
      ferrari: "#dc0000",
      haas: "#ffffff",
      mclaren: "#ff9800",
      mercedes: "#00d2be",
      redBull: "#0600ef",
      williams: "#005aff",
    },
    logos: {  // Colors provided by https://www.f1.daavs.org/credits
      f1Red: "#ff1801",
      dhlYellow: "#ffcc00",
      dhlRed: "#d40511",
      rolexGreen: "#006039",
      rolexGold: "#a37e2c",
      emiratesRed: "#d71a21",
      pirelliRed: "#d52b1e",
      pirelliYellow: "#fed100",
    },
    laps: {   // Colors provided by https://www.f1.daavs.org/credits
      purple: "#a700ff",
      green: "#44d745",
      yellow: "#f8d500",
      red: "#be2c30",
    },
    tyres: {  // Colors provided by https://www.f1.daavs.org/credits
      soft: "#e93324",
      medium: "#f3fd54",
      hard: "#ffffff",
      wet: "#518ed4",
      intermediate: "#6ebe4f",
    },
  },
  fontSizes: {
    label: "0.9em",
    selector: "0.9em",
  },
  design: {
    timingTower: {
      rowHeightPx: 36.5,
      rowLeftHalfWidthPx: 147,
      rowRightHalfWidthPx: 108,
      retiredTopGapPx: 3,
    },
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
  *::before { box-sizing: border-box; touch-action: none; }

  h1, h2, h3, h4, h5, h6 { margin: 0; }

  input,
  textarea,
  button {
    font-family: ${p => p.theme.fonts.basic};
  }
`;
