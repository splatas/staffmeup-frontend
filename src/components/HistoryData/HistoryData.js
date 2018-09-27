import React from "react";

import { CandidateHistory } from "./CandidateHistory";
import { TicketHistory } from "./TicketHistory";

export const HistoryData = ({ match }) =>
  match.params.type.includes("-") ? (
    <CandidateHistory
      data={{
        id: match.params.type.split("-")[0],
        candidate: match.params.type.split("-")[1]
      }}
    />
  ) : (
    <TicketHistory data={match.params.type} />
  );
