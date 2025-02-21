import React from 'react';
import HeroData from './HeroData';

const HeroDetails = ({hero, className}) => {

  return (
    <div className={`${className}`}>
          <h2>buy/rent</h2>
          <div className="hero-b-container">
              {hero.map(({id, ...allData})=> {
              return <HeroData key={id} {...allData} />
              })}
              <div className='search-btn'>
                <img src="./images/search-icon.png" alt="" />
              </div>
          </div>
      </div>
  )
}

export default HeroDetails