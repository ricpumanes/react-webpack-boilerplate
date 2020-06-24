import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "../public/assets/styles/sass/_index.scss";

import App from "./App";
import store from "./logic/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app-root")
);
