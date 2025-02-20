import React from "react";
import missionData from "./mData";

const Missions = () => {
  return (
    <div className="missions-container">
      {missionData.map((item, index) => {
        const { icon, title, details } = item;
        return (
          <div className="mission2" key={index}>
              <img src={icon} alt={title} />
              <div className="mission2-content">
                <h4>{title}</h4>
                <p>{details}</p>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Missions;
