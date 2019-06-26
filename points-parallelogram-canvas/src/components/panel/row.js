import React from "react";
import Input from "./input";

export default function Row({ values, title }) {
  return (
    <div style={{ marginTop: 5, marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
      <label>{title}</label>
      {values.map(val => (
        <Input value={val.value} label={val.label} />
      ))}
    </div>
  );
}
