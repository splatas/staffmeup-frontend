import React from "react";
import { Route, Switch } from "react-router-dom";

import { TicketsList } from "./components/TicketsList";
import { Routing as Ticket } from "./components/Ticket/Routing";
import { Routing as HistoryData } from "./components/HistoryData/Routing";
import { Routing as CompareCandidates } from "./components/CompareCandidates/Routing";
import { Routing as CompareTickets } from "./components/CompareTickets/Routing";
import { NotFound } from "./components/NotFound";
import { Header } from "./components/Header";
import { ActivateFile } from "./components/ActivateFile";

import { Stats } from "./components/Stats";

import { Components } from "./Components";

import "./App.css";
import { ActivateReports } from "./components/ActivateReports";

export const App = () => {
  return (
    <section className="wrapper">
      <Header title="StaffMeUp" path="/">
        <ActivateFile />
        <ActivateReports />
      </Header>
      <Switch>
        <Route exact path="/" component={TicketsList} />
        <Route path="/ticket" component={Ticket} />
        <Route path="/history" component={HistoryData} />
        <Route path="/comparecandidate" component={CompareCandidates} />
        <Route path="/compareticket" component={CompareTickets} />
        <Route path="/reports" component={Stats} />
        <Route component={NotFound} />
        {/* <Route exact path="/components" component={Components} /> */}
      </Switch>
    </section>
  );
};
