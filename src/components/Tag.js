import React from "react";
import "./Tag.css";

export const Tag = ({ category }) => {
  return (
    <div className="tag-container">
       {category}
    </div>
  );
};
