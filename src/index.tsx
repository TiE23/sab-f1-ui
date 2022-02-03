import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./clear.css";

import App from "./App";
import Broadcast from "./components/Broadcast/BroadcastRoute";
import Workspaces from "./components/Workspaces/WorkspacesRoute";

import { GlobalStyle, theme } from "./shared/theme";
import { GlobalFonts } from "./fonts";
import { store } from "./store";

import { IndexHeading } from "./components/Common/IndexHeading.styled";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <GlobalFonts />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<IndexHeading>Home</IndexHeading>} />
              <Route path="broadcast" element={<Broadcast />} />
              <Route path="workspaces/*" element={<Workspaces />} />
              <Route path="*" element={<IndexHeading>Page Not Found</IndexHeading>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
