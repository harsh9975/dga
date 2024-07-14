import React from "react";
import "./Button.css";

const Button = ({
  onClick,
  children,
  type = "filled",
  icon = null,
  style = {},
}) => {
  return (
    <button onClick={onClick} className={`button ${type}`} style={style}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
