import React from "react";

const defaultStyles = {
  h1: { fontSize: "2em", fontWeight: "bold", color: "#222222" },
  h2: { fontSize: "1.5em", fontWeight: "bold", color: "#222222" },
  h3: { fontSize: "1.17em", fontWeight: "bold", color: "#222222" },
  h4: { fontSize: "1em", fontWeight: "bold", color: "#222222" },
  h5: { fontSize: "0.83em", fontWeight: "bold", color: "#222222" },
  h6: { fontSize: "0.67em", fontWeight: "bold", color: "#222222" },
  p: { fontSize: "1em", color: "#666b68" },
  span: { fontSize: "1em" },
};

const Textfield = ({ type = "p", children, style = {} }) => {
  const Tag = type;
  const combinedStyle = { ...defaultStyles[type], ...style };

  return <Tag style={combinedStyle}>{children}</Tag>;
};

export default Textfield;
