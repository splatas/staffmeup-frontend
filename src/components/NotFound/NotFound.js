import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <h1>
      Page Not Found! <Link to="/">Back to home »</Link>{" "}
    </h1>
  );
};
