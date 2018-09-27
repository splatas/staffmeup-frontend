import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "../NotFound";
import { HistoryData } from "./HistoryData";

export const Routing = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:type`} component={HistoryData} />
    <Route component={NotFound} />
  </Switch>
);
