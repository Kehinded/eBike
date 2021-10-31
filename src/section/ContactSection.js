import React from "react";
import Dot from "../fragment/Dot";
import HeaderLogo from "../fragment/HeaderLogo";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <Dot top="-18%" right="1rem" bgcolor="#FFE8B9" dotFour={true} />
      <div className="contact-wrapper">
        <div className="box-1">
          <HeaderLogo roundColor="white-color" />
          <p className="text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="copy">©eBike 2021. All rights reserved</p>
        </div>
        <div className="box-2">
          <div className="company-box">
            <p className="title">Company</p>
            <ul className="list">
              <li className="item">product</li>
              <li className="item">bike type</li>
              <li className="item">about us</li>
              <li className="item">contact</li>
            </ul>
          </div>
          <div className="help-box">
            <p className="title">help</p>
            <ul className="list">
              <li className="item">help center</li>
              <li className="item">contact support</li>
              <li className="item">instructions</li>
              <li className="item">how it works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

