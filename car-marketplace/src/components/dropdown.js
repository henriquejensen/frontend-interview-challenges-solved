import React from "react";
import style from "styled-components";

export function Dropdown({ label, options = [], onChange }) {
  return (
    <Container>
      <Label htmlFor="dropdown">{label}</Label>
      <Select name="dropdown" onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  );
}

const Container = style("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px
`;

const Label = style("label")`
  position: absolute;
  top: -8px;
  left: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background: white;
  font-size: 12px
`;

const Select = style("select")`
  padding: 15px 5px 10px 5px;
  border-radius: 5px;
  border-width: 2px;
  min-width: 180px
`;
