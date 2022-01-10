import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./clear.css";

import App from "./App";
import Broadcast from "./components/Broadcast/BroadcastRoute";
import Workspaces from "./components/Workspaces/WorkspacesRoute";
import { Workspace } from "./components/Workspaces/Workspace";

import { GlobalStyle, theme } from "./shared/theme";
import { GlobalFonts } from "./fonts";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <GlobalFonts />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="broadcast" element={<Broadcast />} />
              <Route path="workspaces" element={<Workspaces />}>
                <Route index element={<h1>Workspaces Home</h1>} />
                <Route path=":workspaceId" element={<Workspace />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
