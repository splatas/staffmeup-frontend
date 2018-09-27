import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

export const BackButton = ({ path }) => (
  <Link to={path}>
    <button className="backButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="icon"
      >
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
    </button>
  </Link>
);
