import React from "react";

import illustration from "../../images/illustration-intro.png";

import "./Intro.css";

const Intro = () => {
  return (
    <section className="introContainer">
      <img
        src={illustration}
        alt="illustration of paperwork"
        className="introImage"
      />
      <h1 className="mainHeader whiteText">
        All of your files in one secure Location, accessible anywhere.
      </h1>
      <p className="introParagraph whiteText">
        FyloStores all your most important files in one secure location.
      </p>
      <p className="introParagraph whiteText">
        Access them whever you meed, share and collaborate with friends family,
        and co-workers.
      </p>
      <button className="introButton whiteText">Get Started</button>
    </section>
  );
};

export default Intro;
