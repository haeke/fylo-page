import React, { Component } from "react";
import Button from "../Button/Button";

import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(`sending email.... ${this.state.email}`);
  };
  render() {
    return (
      <section className="signUp">
        <h1 className="mainHeader signUpHeader whiteText">
          Get Early Access Today
        </h1>
        <p className="whiteText signUpParagraph">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any quetsions, our support team would
          be happy to help you.
        </p>
        <div className="inputGroup">
          <input
            type="text"
            className="signUpInput"
            placeholder="email@example.com"
          />
          <Button text="Get Started For Free" />
        </div>
      </section>
    );
  }
}

export default SignUp;
