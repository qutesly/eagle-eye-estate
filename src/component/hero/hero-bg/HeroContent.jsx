import React, { useState } from "react";
import HeroDetails from "./HeroDetails";
import HeroBtn from "./HeroBtn";
import data from './data'


const HeroContent = () => {
  const [hero, setHero] = useState(data)
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <div className="hero-top">
          <h1>
            EXCEL <span>HOMES</span>
          </h1>
          <h2>
            unlock your <span>FUTURE</span> with exceptional real estate
            services.
          </h2>
          <p>
            We turn your real estate dreams into reality. Whether you’re buying,
            selling, or investing, our experienced professionals are here to
            guide you every step of the way. Dive into the market with
            confidence and let us help you find your ideal property today!
          </p>
          <div className="top-btns">
            <HeroBtn text='Explore Estate' className='blue-btn' />

            <div className="btn-underline">
              <div className="btn-wrap">
                <button className="contact-btn blue-btn">Contact Us</button>
                <img src="./images/blue-arrow.png" alt="" />
              </div>

              <div className="underline"></div>
            </div>
          </div>
        </div>
        <HeroDetails hero={hero} />
        <HeroBtn text='Become an Affiliate' className='affiliate-btn blue-btn' />
      </div>
      
    </div>
  );
};

export default HeroContent;
