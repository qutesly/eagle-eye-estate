import React from "react";

const HeroBtn = ({text, className}) => {
  return (
      <button className={`${className}`}>
        {text}<img src="./images/small-arrow-right.png" alt="" />
      </button>
  );
};

export default HeroBtn;
