import React from 'react';
import data from './data'

const HeroDetails = () => {
  return (
    <div className="hero-bottom">
          <h2>buy/rent</h2>
          <div className="hero-b-container">
              {data.map((item, index)=> {
                const {title, icon, details} = item;
                return(
                    <div className="hero-b-content" key={index}>
                <div className='location'>
                    <p>{title}</p>
                  <img src={icon} alt=""/>
                </div>
                  <h3>{details}</h3>
              </div>
                )
              })}
              <div className='search-btn'>
                <img src="./images/search-icon.png" alt="" />
              </div>
          </div>
      </div>
  )
}

export default HeroDetails