import React from "react";

import Intro from "../Intro/Intro";
import Features from "../Features/Features";
import FeaturesArticle from "../FeaturesArticle/FeaturesArticle";
import Productive from "../Productive/Productive";
import Testimonials from "../Testimonials/Testimonials";
import TestimonialArticle from "../TestimonialArticle/TestimonialArticle";
import SignUp from "../SignUp/SignUp";

// ArticleImage's imports
import access from "../../images/icon-access-anywhere.svg";
import security from "../../images/icon-security.svg";
import collaboration from "../../images/icon-collaboration.svg";
import file from "../../images/icon-any-file.svg";

// TestimonialImage's imports
import profile_1 from "../../images/profile-1.jpg";
import profile_2 from "../../images/profile-2.jpg";
import profile_3 from "../../images/profile-3.jpg";

const Fylo = () => {
  return (
    <main className="mainSection">
      <Intro />
      <Features>
        <FeaturesArticle
          articleImage={access}
          articleImageAltText="Access Logo"
          articleHeader="Access your files, anywhere"
          articleParagraph="The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere."
        />
        <FeaturesArticle
          articleImage={security}
          articleImageAltText="Security Logo"
          articleHeader="Security you can trust"
          articleParagraph="2-factor authentication and user-controlled encryption are just acouple of the security features we allow to help secure your files."
        />
        <FeaturesArticle
          articleImage={collaboration}
          articleImageAltText="Real-time Collaboration"
          articleHeader="Real-time Collaboration"
          articleParagraph="Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required."
        />
        <FeaturesArticle
          articleImage={file}
          articleImageAltText="Anywhere Logo"
          articleHeader="Take Anywhere"
          articleParagraph="Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared."
        />
      </Features>
      <Productive />
      <Testimonials>
        <TestimonialArticle
          testimonialQuote="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          testimonialPersonImage={profile_1}
          testimonialPersonName="Satish Patel"
          testimonialPersonTitle="Founder &#x26; CEO, Huddle"
        />
        <TestimonialArticle
          testimonialQuote="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          testimonialPersonImage={profile_3}
          testimonialPersonName="Iva Boyd"
          testimonialPersonTitle="Founder &#x26; CEO, Nabisco"
        />
        <TestimonialArticle
          testimonialQuote="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          testimonialPersonImage={profile_2}
          testimonialPersonName="Bruce McKenzie"
          testimonialPersonTitle="Founder &#x26; CEO, Blue"
        />
      </Testimonials>
      <SignUp />
    </main>
  );
};

export default Fylo;
