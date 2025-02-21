import React from 'react';
import './style.css';
import HeroBtn from '../hero/hero-bg/HeroBtn';

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className='about-container'>
            <div className='image'>
                <img src="./images/AboutUs.png" alt="manager" />
            </div>
            <div className='about-content'>
                <h2>About Us</h2>
                <p>Welcome to <span>Excel Home</span> We are a dedicated team of real estate professionals passionate about helping you navigate the dynamic property(Houses & Lands) market. With 30years of experience, we pride ourselves on our extensive knowledge of the local area and market trends, enabling us to provide tailored solutions that align with your unique needs and goals.</p>
                <div>
                    <HeroBtn text='Learn More' className='blue-btn about-btn' />
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default AboutUs