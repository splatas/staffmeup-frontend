import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "../NotFound";
import { Ticket } from "./Ticket";

export const Routing = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:idTicket`} component={Ticket} />
    <Route component={NotFound} />
  </Switch>
);
