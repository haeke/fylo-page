import React from "react";
import PropTypes from "prop-types";

import quotes from "../../images/bg-quotes.png";

import "./Testimonials.css";

const Testimonials = ({ children }) => {
  return (
    <section className="testimonialsSection">
      <img src={quotes} alt="quotes" className="testimonialLogo" />
      <div className="testimonialWrapper">{children}</div>
    </section>
  );
};

Testimonials.propTypes = {
  children: PropTypes.node
};

export default Testimonials;
