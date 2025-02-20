import React from "react";
import "./style.css";
import HeroBtn from "../hero/hero-bg/HeroBtn";
import PropCard from "./PropCard";



const Properties = ({ title, propertyList = [], buttonText}) => {
    if(!Array.isArray(propertyList) || propertyList.length === 0){
        return <div>No properties available</div>
    }

  return (
    <div className="property">
      <h1>{title}</h1>
      <div className="properties">
        {propertyList.map((ListItem, index)=> (
            <PropCard key={index} {...ListItem} />
        ))}
      </div>
      <HeroBtn text={buttonText} className='blue-btn property-btn' />
    </div>
  );
};

export default Properties;
