import React from "react";
import PropTypes from "prop-types";

// This component is to be used with the Testimonial container component, it takes in props to dynamically set the testimonialQuote, testimonialPersonImage, testimonialPersonAltText, testimonialPersonName, testimonialPersonTitle text.

const TestimonialArticle = ({
  testimonialQuote,
  testimonialPersonImage,
  testimonialPersonAltText,
  testimonialPersonName,
  testimonialPersonTitle
}) => {
  return (
    <article className="testimonial">
      <p className="testimonialParagraph whiteText">{testimonialQuote}</p>
      <div className="testimonialPersonContainer">
        <img
          className="testimonialPerson"
          src={testimonialPersonImage}
          alt={testimonialPersonAltText}
        />
        <div className="testimonialPositionContainer">
          <p className="testimonialTitle whiteText">{testimonialPersonName}</p>
          <p className="testimonialTitle whiteText">{testimonialPersonTitle}</p>
        </div>
      </div>
    </article>
  );
};

TestimonialArticle.propTypes = {
  testimonialQuote: PropTypes.string,
  testimonialPersonImage: PropTypes.string,
  testimonialPersonAltText: PropTypes.string,
  testimonialPersonName: PropTypes.string,
  testimonialPersonTitle: PropTypes.string
};

export default TestimonialArticle;
