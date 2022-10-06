import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import GlobalStyles from "./styles/global";
import Routes from "./routes/routes";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
