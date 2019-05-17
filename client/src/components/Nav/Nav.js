import React from "react";
import { Link } from "react-router-dom";

import Fylo from "../Fylo/Fylo";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="headerSection">
      <img className="logo" src="../../images/logo.svg" alt="logo" />
      <nav className="navSection">
        <Link to={Fylo} className="navLink callToActionHeader">
          Features
        </Link>
        <Link to={Fylo} className="navLink">
          Team
        </Link>
        <Link to={Fylo} className="navLink">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
