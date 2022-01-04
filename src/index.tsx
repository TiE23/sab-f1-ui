import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./clear.css";

import App from "./App";
import Broadcast from "./routes/BroadcastRoute";
import { GlobalStyle, theme } from "./shared/theme";
import { GlobalFonts } from "./fonts";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/broadcast" element={<Broadcast />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
