import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Routes from "./routes/routes";
import { IntlProvider } from "react-intl";
import flattenMessages from "./helpers/flattenMessages";
import locale from "./locale/index";
import theme from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <IntlProvider locale="pt-BR" messages={flattenMessages(locale["pt-BR"])}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
