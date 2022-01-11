import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import PayDetails from "./PayDetails";
import Success from "./Success";

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
      payAmount,
      addComment,
    } = this.state;
    const values = {
      email,
      username,
      password,
      firstName,
      lastName,
      payAmount,
      addComment,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PayDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
      // do nothing
    }
  }
}
