import React from "react";
import "./style.css";
import HeroContent from "./hero-bg/HeroContent";

const Hero = () => {
  return (
    <div className="hero">
      <div
        className="hero-image"
        style={{
          background: "url('/images/hero-house.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
    />
        <HeroContent />
    </div>
  );
};

export default Hero;
