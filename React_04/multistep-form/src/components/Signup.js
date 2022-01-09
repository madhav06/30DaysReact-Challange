import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    step: 1,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    payableAmount: "",
    addComment: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  render() {
    const { step } = this.state;
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      payableAmount,
      addComment,
    } = this.state;
    const values = {
      email,
      username,
      password,
      firstName,
      lastName,
      payableAmount,
      addComment,
    };

    switch (step) {
      case 1: //
    }

    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}
