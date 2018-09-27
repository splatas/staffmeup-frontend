import React from "react";
import { StatsTech } from "../StatsTech";
import { StatsTickets } from "../StatsTickets";
import { TitlesContainer } from "../TitlesContainer";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { ActivateExport } from "../ActivateExport";

import "./Stats.css";

export const Stats = () => {
  return (
    <div>
      <TitlesContainer>
        <Title>Reports</Title>
      </TitlesContainer>

      <TitlesContainer>
        <Subtitle>Tickets By Status</Subtitle>
        <ActivateExport route="/tickethistory/downloadTechnologyReport" />
      </TitlesContainer>
      <StatsTickets />

      <TitlesContainer>
        <Subtitle>Days to close a ticket by tech</Subtitle>
        <ActivateExport route="/tickethistory/downloadTechnologyReport" />
      </TitlesContainer>
      <StatsTech />
    </div>
  );
};
