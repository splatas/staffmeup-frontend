import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "../NotFound";
import { CompareTickets } from "./CompareTickets";

export const Routing = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:idTicket`} component={CompareTickets} />
    <Route component={NotFound} />
  </Switch>
);
