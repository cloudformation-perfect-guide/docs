import React from "react";
import "./Recipe.css";

export const Recipe = ({ url, title }) => {
  return (
    <div className="recipe-container">
      <img className="recipe-architecture-image" src={url} />
      <div className="recipe-title">{title}</div>
    </div>
  );
};
