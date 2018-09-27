import React from "react";

import "./ViewMore.css";

export const ViewMore = ({ children }) => {
  return (
    <span className="viewMore" title={children}>
      ?
    </span>
  );
};
