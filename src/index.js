import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
import { Provider } from "react-redux";

import { store } from "./state/store";
import { App } from "./App";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
