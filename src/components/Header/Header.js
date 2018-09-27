import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = ({ title, path, children }) => (
  <header>
    <Link to={path}>
      <img src="logo.svg" alt="Staff Me Up" className="logo" />
    </Link>
    {children}
  </header>
);
