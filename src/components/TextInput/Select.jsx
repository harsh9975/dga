import React, { useState, useRef, useEffect } from "react";
import styles from "./TextInput.module.css";
import { FiChevronDown } from "react-icons/fi"; // Example arrow icon from react-icons

const Select = ({
  label,
  value,
  onChange,
  options,
  error,
  style,
  selectStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange({ target: { value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className={styles.textfield} style={{ ...style }} ref={selectRef}>
      <label>{label}</label>
      <div className={styles.dropdown}>
        <div className={styles.selectedOption} onClick={toggleDropdown}>
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select an option"}
          <FiChevronDown className={styles.arrowIcon} />
        </div>
        {isOpen && (
          <div className={styles.options}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p style={{ fontSize: "12px", marginTop: "3px", color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
