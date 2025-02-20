import React from "react";
import "./footer.styles.css";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="./images/logo2.png" alt="logo" />
        </div>
        <div className="footer-content">
          <div className="address contact">
            <div className="address-top">
              <h2>Our Offices</h2>
              <p>
                No 124 TY junction, umuokoro <span> Port-Harcourt, Rivers State,</span>
                Nigeria.
              </p>
            </div>
            <div className="address-bottom">
              <h2>Head Office</h2>
              <p>
                No 5 Nwokilo Street, <span> Off Zik Avenue,</span>{" "}
                <span> Awka Anamabra State,</span>
                Nigeria.
              </p>
            </div>
          </div>
          <div className="contact contact-us">
            <h2>Contact Us</h2>
            <p>
              <img src="./images/call.png" alt="" />
              080**********9
            </p>
            <p>
              <img src="./images/call.png" alt="" />
              080**********9
            </p>
            <p>
              <img src="./images/whatsapp.png" alt="" />
              080**********9
            </p>
            <p>
              <img src="./images/message.png" alt="" />
              ExcelHomes@gmail.com
            </p>
          </div>
          <div className="contact quick-links">
            <h2>Quick Links</h2>
            <p>
              New Haven Estate <span> Enugu</span>
            </p>
            <p>Awka Smart City Estate</p>
            <p>
              Jabbi Phase 2 Estate
              <span> Abuja</span>{" "}
            </p>
            <p>
              Lekki Phase 1<span> Lagos</span>
            </p>
            <p>Taiwan Estate Enugu</p>
            <p>
              Federal Housing Estate
              <span> Onitsha</span>
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
