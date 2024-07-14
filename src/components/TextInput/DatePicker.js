import React from "react";
import styles from "./TextInput.module.css";

const DatePicker = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  style,
  inputStyle,
}) => {
  return (
    <div className={styles.textfield} style={{ ...style }}>
      {/* <label>{label}</label> */}
      <input
        type="date"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
      />
      {error && (
        <p style={{ fontSize: "12px", marginTop: "3px", color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
