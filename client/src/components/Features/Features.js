import React from "react";

import "./Features.css";

// The features component is responsible for rendering the Features section which includes the FeaturesArticle components.

const Features = ({ children }) => {
  return <section class="featuresSection">{children}</section>;
};

export default Features;
