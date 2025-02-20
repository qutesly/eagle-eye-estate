import React from "react";
import "./newsletter.styles.css";
import HeroBtn from "../hero/hero-bg/HeroBtn";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Subscribe to our newsletter</h2>
          <p>Be the first to know latest on our properties</p>
        </div>
        <form action="" className="review-form">
            <input type="text" placeholder="Enter Email" className="input" />
          <HeroBtn text="Subscribe" className="blue-btn" />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
