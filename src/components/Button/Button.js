import React from "react";
import "./Button.css";

export const Button = ({ children, className, name, onClick }) => {
  return (
    <button className={className} name={name} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "btn",
  name: "button",
  onClick: null
};
