import React from "react";

const HeroData = ({ title, icon, details }) => {
  return (
    <div className="hero-b-content">
      <div className="location">
        <p>{title}</p>
        <img src={icon} alt="" />
      </div>
      <h3>{details}</h3>
    </div>
  );
};

export default HeroData;
