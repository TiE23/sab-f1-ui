import { createGlobalStyle, ThemeProps } from "styled-components/macro";

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
    posLostRed: "#e40030",
    posGainedGreen: "#10ff35",
    posFastestLap: "#ae43ca",
    black: "#000",
    grey: "#aaa",
    lightGrey: "#ddd",
    faintGrey: "#eee",
    darkGrey: "#303030",
    dimGrey: "#999",
    videoFrameBG: "#333",
    posWhite: "#f4f3ee",
    textWhite: "#f1f1f1", // I found it to be #f2f2f2 but whatever
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
      rolexYellow: "#faff04",
      rolexGemGreen: "#06692f",
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
    indicatorLapLabel: "1.2em",
    indicatorLapCount: "1.5em",
  },
  design: {
    chyronDriver: {
      containerFadeAwayDurationMs: 300,
      outlineClipPathDurationMs: 500,
      outlineFadeDurationMs: 1167,
      baseBlackOpacityDurationMs: 800,
      baseBlackWidthDurationMs: 667,
      baseWipeDurationMs: 400,
      baseWipeDelay: 333,
      baseColorDurationMs: 566,
      baseColorDelayMs: 600,
      posFlagBlindsDelayMs: 500,
      posFlagBlindsColor: "#f60d0d",
      posFlagBlindsColorFadeDurationMs: 300,
      posFlagBlindsColorFadeDelayMs: 200,
      posFlagBlindsAngleDeg: -45,
      posFlagBlindsOpenDurationMs: 100,
      posFlagBlindsOpenDelayMs: 150,
      posFlagBlindsBlindsSize: { transparent: 3, opaque: 6 },
      posFlagWipeAngleDeg: 40,
      posFlagWipeDuration: 333,
      posFlagOpacityStartFraction: 0.1,
      posFlagOpacityDurationMs: 200,
      posFlagOpacityDelayMs: 100,
      posFlagSpanBlinkDurationMs: 500,
      teamColorBarDurationMs: 667,
      teamColorBarDelayMs: 733,
      teamNameAnimationDurationMs: 233,
      teamNameAnimationDelayMs: 500,
      flagDelay: 1000,
      flagOpacityDurationMs: 1200,
      flagRightDuration: 2000,
      portraitOpacityDurationMs: 500,
      portraitOpacityDelayMs: 2000,
      portraitPlacement: { right: "-5px", bottom: "0" },
      portraitBlindsDelayMs: 1700,
      portraitBlindsColorFadeDurationMs: 600,
      portraitBlindsColorFadeDelayMs: 0,
      portraitBlindsAngleDeg: -45,
      portraitBlindsOpenDurationMs: 300,
      portraitBlindsOpenDelayMs: 0,
      portraitBlindsSize: { transparent: 2, opaque: 5 },
      portraitWipeAngleDeg: 45,
      portraitWipeDurationMs: 700,
    },
    statusIndicator: {
      heightNormalPx: 73,
      roundedCornerRadiusPx: 8,
    },
    timingTower: {
      rowHeightPx: 36.5,
      rowLeftHalfWidthPx: 147,
      rowRightHalfWidthPx: 108,
      retiredTopGapPx: 3,
      teamGemSizePx: 30,
      posFlagSizePx: 32,
      nameLeftMarginPx: 14,
      nameTopMarginPx: 4,
      rowRoundedCornerRadiusPx: 5,
      wipeDelayMs: 3500,
      wipeDurationMs: 400,
      rowTravelDurationMs: 750,
      fullWidthDurationMs: 750,
      fullWidthCloseDelayMs: 333,
      fastestLapToastDurationMs: 500,
    },
    button: {
      borderRadius: "0.25rem",
    },
    rolexGem: {
      widthPx: 130,
      heightPx: 74,
      borderRadiusPx: 4,
      bottomMarginPx: 3,
      fadeInDurationMs: 600,
      fadeInDelayMs: 1000,
      logoHeightPx: 68,
      logoHeightFadeStartFraction: 0.7,
      logoOpacityFadeStartFraction: 0.5,
      logoTopMarginPx: 2,
    },
  },
  broadcast: {
    dimensionsWidthPx: 1920,
    dimensionsHeightPx: 1080,
    logoHeightPx: 40,
    placement: {
      chyrons: { bottom: "52px", left: "378px" },
      timingBoard: { top: "54px", left: "96px" },
      logo: { left: "86px", bottom: "52px" },
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
  *::before { box-sizing: border-box; touch-action: none; }

  h1, h2, h3, h4, h5, h6 { margin: 0; }

  input,
  textarea,
  button {
    font-family: ${p => p.theme.fonts.basic};
  }
`;
