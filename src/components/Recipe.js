import React from "react";
import "./Recipe.css";
import Link from "@docusaurus/Link";

export const Recipe = ({ to, imageUrl, title }) => {
  return (
    <Link to={to}>
      <div className="recipe-container">
        <img className="recipe-architecture-image" src={imageUrl} />
        <div className="recipe-title">{title}</div>
      </div>
    </Link>
  );
};
