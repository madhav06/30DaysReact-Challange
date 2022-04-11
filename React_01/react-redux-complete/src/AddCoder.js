// Form Component

import React, {Component} from "react";
import styles from './App.css'
import {
    Container,
    Typography,
    Grid,
    TextField,
    InputField,
    Button,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
class AddCoder extends Component { 
    state = {
        name: null,
        age: null,
        contribution: null,
        ranking: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className="container" alignItems="center">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                        <label htmlFor="name">Age:</label>
                        <input type="text" id="age" onChange={this.handleChange}/>
                        <label htmlFor="name">Contribution:</label>
                        <input type="text" id="contribution" onChange={this.handleChange}/>
                        <label htmlFor="name">Ranking:</label>
                        <input type="text" id="ranking" onChange={this.handleChange}/>
                        <button className="button1">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddCoder;