import React from 'react';

export default function Input({
  value, label
}) {
  
  return (
    <span style={{ marginRight: 3, marginLeft: 3 }}>
    {label}: <input defaultValue={value} style={{ width: 55, padding: 5 }} />
    </span>
  )

};