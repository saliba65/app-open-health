import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Home/App";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import GlobalStyles from "./styles/global";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
