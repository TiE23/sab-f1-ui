import { createGlobalStyle } from "styled-components/macro";

import Formula1RegularWoff2 from "./Formula1-Regular.woff2";
import Formula1RegularTTF from "./Formula1-Regular.ttf";
import Formula1BoldWoff2 from "./Formula1-Bold.woff2";
import Formula1BoldTTF from "./Formula1-Bold.ttf";
import Formula1ItalicWoff2 from "./Formula1-Italic.woff2";
import Formula1ItalicTTF from "./Formula1-Italic.ttf";
import Formula1BlackWoff2 from "./Formula1-Black.woff2";
import Formula1BlackTTF from "./Formula1-Black.ttf";
import Formula1WideWoff2 from "./Formula1-Wide.woff2";
import Formula1WideTTF from "./Formula1-Wide.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Formula1 Regular";
    src: url(${Formula1RegularWoff2}) format("woff2"),
         url(${Formula1RegularTTF}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Formula1 Bold";
    src: url(${Formula1BoldWoff2}) format("woff2"),
         url(${Formula1BoldTTF}) format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Formula1 Italic";
    src: url(${Formula1ItalicWoff2}) format("woff2"),
         url(${Formula1ItalicTTF}) format("truetype");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Formula1 Black";
    src: url(${Formula1BlackWoff2}) format("woff2"),
         url(${Formula1BlackTTF}) format("truetype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Formula1 Wide";
    src: url(${Formula1WideWoff2}) format("woff2"),
         url(${Formula1WideTTF}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-stretch: expanded;
    font-display: swap;
  }
`;
