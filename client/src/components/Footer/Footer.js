import React from "react";

import logo from "../../images/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="contactWrapper">
        <div className="contactContainer">
          <div className="contactInfo">
            <i className="fas fa-map-marker-alt whiteText footerIcon" />
            <p className="locationText whiteText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="phoneAndEmailContainer">
          <div className="phone">
            <i className="fas fa-phone-volume whiteText footerIcon" />
            <p className="whiteText footerText">+1-543-123-4567</p>
          </div>
          <div className="email">
            <i className="fas fa-envelope-square whiteText footerIcon" />
            <p className="whiteText footerText">contact@fylo.com</p>
          </div>
        </div>
        <div className="linksContainer">
          <ul className="links">
            <li className="link">
              <a href="#" className="contactLink">
                About Us
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Contact Us
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Jobs
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Press
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Terms
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Blog
              </a>
            </li>
            <li className="link">
              <a href="#" className="contactLink">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="socialsContainer">
          <div className="socialIcon">
            <a href="https://twitter.com">
              <i className="fab fa-twitter whiteText" />
            </a>
          </div>
          <div className="socialIcon">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f whiteText" />
            </a>
          </div>
          <div className="socialIcon">
            <a href="https://instagram.com">
              <i className="fab fa-instagram whiteText" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
