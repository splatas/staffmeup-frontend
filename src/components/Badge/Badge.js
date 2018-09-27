import React from "react";

import "./Badge.css";

export const Badge = ({ status }) => {
  const statusParsed = () => parseString(status) === "closed";

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  const parseString = str => {
    return str
      .toString()
      .toLowerCase()
      .replace(/ /g, "");
  };

  return (
    <div className={`badge ${statusParsed() ? `closed` : `notClosed`}`}>
      {statusParsed() ? `Closed` : capitalize(status.toString())}
    </div>
  );
};
