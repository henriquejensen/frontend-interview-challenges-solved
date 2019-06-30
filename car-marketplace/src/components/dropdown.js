import React from "react";

export function Dropdown({ label, options = [], onChange }) {
  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="dropdown">
        {label}
      </label>
      <select name="dropdown" style={styles.select} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  label: {
    position: "absolute",
    top: -8,
    left: 10,
    paddingLeft: 5,
    paddingRight: 5,
    background: "white",
    fontSize: 12
  },
  select: {
    padding: "15px 5px 10px 5px",
    borderRadius: 5,
    borderWidth: 2
  }
};
