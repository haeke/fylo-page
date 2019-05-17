import React from "react";

import Intro from "../Intro/Intro";
import Features from "../Features/Features";
import FeaturesArticle from "../FeaturesArticle/FeaturesArticle";
import Productive from "../Productive/Productive";

// ArticleImage's imports
import access from "../../images/icon-access-anywhere.svg";
import security from "../../images/icon-security.svg";
import collaboration from "../../images/icon-collaboration.svg";
import file from "../../images/icon-any-file.svg";

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
    </main>
  );
};

export default Fylo;
