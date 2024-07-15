import React from "react";

const defaultStyles = {
  h1: { fontSize: "2em", fontWeight: "bold" },
  h2: { fontSize: "1.5em", fontWeight: "bold" },
  h3: { fontSize: "1.17em", fontWeight: "bold" },
  h4: { fontSize: "1em", fontWeight: "bold" },
  h5: { fontSize: "0.83em", fontWeight: "bold" },
  h6: { fontSize: "0.67em", fontWeight: "bold" },
  p: { fontSize: "1em", color: "#666b68" },
  span: { fontSize: "1em" },
};

const Textfield = ({
  type = "p",
  children,
  style = {},
  colorType = "black",
}) => {
  const Tag = type;
  let color =
    colorType == "black"
      ? "#222222"
      : colorType == "blue"
      ? "#023a65"
      : colorType == "white"
      ? "#fff"
      : "#bfbfbf";
  const combinedStyle = { ...defaultStyles[type], color: color, ...style };

  return <Tag style={combinedStyle}>{children}</Tag>;
};

export default Textfield;
