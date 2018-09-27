import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "../NotFound";
import { CompareCandidates } from "./CompareCandidates";

export const Routing = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:idTicket`} component={CompareCandidates} />
    <Route component={NotFound} />
  </Switch>
);
