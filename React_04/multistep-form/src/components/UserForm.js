import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  
    state = {
        step = 1,
        PayableAmount: '',
        AddComment: '',
                
    };
    nextStep = () => {
        const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
};

//handlers

const handleChange = () => {

}






