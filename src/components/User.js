import React from "react";
import "./User.css";

export const User = ({ name, description }) => {
  return (
    <div className="img-wrapper">
      <img src="https://pbs.twimg.com/profile_images/995611723850645504/BIjprphs_400x400.jpg" />
      <div className="profile">
        <div className="profile-name">Presented By {name}</div>
        <div className="profile-description">{description}</div>
      </div>
    </div>
  );
};
