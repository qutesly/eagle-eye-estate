import React from "react";
import "./style.css";
import Missions from "./Missions";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-wrapper">
        <div className="mission">
          <div className="mission-top">
            <h1>Our Mission</h1>
            <p>
              Our mission is simple: to empower our clients with the tools and
              knowledge they need to make informed real estate decisions. We
              believe that whether you’re buying, selling, or investing, every
              step should be clear and straightforward.
            </p>
          </div>

          <div className="mission-top">
            <h1>Our Vision</h1>
            <p>
              To be the leading real estate firm that transforms the way people
              buy, sell, and invest in properties.We aspire to create seamless,
              innovative experiences that empower our clients to make informed
              decisions with confidence,ensuring everyone have a place to call a
              home.
            </p>
          </div>
        </div>

        <div className="mission-bottom">
          <h1>Our Services</h1>
          <p>
            We provide you with affordable landed property and housing across
            the nation, providing even the lest with a place of living.
          </p>
        </div>

        <Missions />
      </div>
    </div>
  );
};

export default Mission;
