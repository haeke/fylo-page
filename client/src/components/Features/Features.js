import React from "react";
import PropTypes from "prop-types";

import "./Features.css";

// The features component is responsible for rendering the Features section which includes the FeaturesArticle components.

const Features = ({ children }) => {
  return <section className="featuresSection">{children}</section>;
};

Features.propTypes = {
  children: PropTypes.node
};

export default Features;
