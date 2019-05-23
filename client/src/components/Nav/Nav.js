import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="headerSection">
      <img className="logo" src={logo} alt="logo" />
      <nav className="navSection">
        <Link to="/" className="navLink callToActionHeader">
          Features
        </Link>
        <Link to="/" className="navLink">
          Team
        </Link>
        <Link to="/countries" className="navLink">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
