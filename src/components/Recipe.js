import React from "react";
import "./Recipe.css";
import Link from "@docusaurus/Link";

export const Recipe = ({ to, imageUrl, title, subTitle }) => {
  return (
    <Link to={to}>
      <div className="recipe-container">
        <img className="recipe-architecture-image" src={imageUrl} />
        <div className="recipe-title">{title}</div>
        <div className="recipe-sub-title">{subTitle}</div>
      </div>
    </Link>
  );
};
