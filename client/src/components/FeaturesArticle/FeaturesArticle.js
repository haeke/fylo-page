import React from "react";
import PropTypes from "prop-types";

// This component is meant to be used with the Features component to display a single article. It takes in props to dynamically set the articleImage, articleHeader, and article Paragraph Text.

const FeaturesArticle = ({
  articleImage,
  articleImageAltText,
  articleHeader,
  articleParagraph
}) => {
  return (
    <article className="featureArticle">
      <img src={articleImage} alt={articleImageAltText} />
      <h1 className="featureHeader whiteText">{articleHeader}</h1>
      <p className="featureParagraph whiteText">{articleParagraph}</p>
    </article>
  );
};

FeaturesArticle.propTypes = {
  articleImage: PropTypes.string,
  articleImageAltText: PropTypes.string,
  articleHeader: PropTypes.string,
  articleParagraph: PropTypes.string
};

export default FeaturesArticle;
