import React from "react";

import arrow from "../../images/icon-arrow.svg";
import productive from "../../images/illustration-stay-productive.png";

import "./Productive.css";

const Productive = () => {
  return (
    <section className="productiveSection">
      <img
        src={productive}
        alt="People Productive"
        className="productiveImage"
      />
      <article className="productiveInfo">
        <h1 className="mainHeader whiteText">
          Stay productive, whever you are
        </h1>
        <p className="productiveParagraph whiteText">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p className="productiveParagraph whiteText">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachment required.
        </p>
        <a href="#" className="productiveLink">
          See how Fylo works
          <span>
            <img src={arrow} alt="Arrow Logo" />
          </span>
        </a>
      </article>
    </section>
  );
};

export default Productive;
