import React from "react";
import "./CheckBox.css";
export const CheckBox = ({ id, value, checked, onChange }) => {
  return (
    <input
      className="checkbox"
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );
};
