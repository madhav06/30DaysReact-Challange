import React, {useState} from "react";
import {Form, Button, Alert} from 'react-bootstrap';

const UserForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = event => {
        event.preventDefault();


        var passwordValid = false;
        var emailValid = false;
        if(email.length == 0) {
            setEmailError("Email is required");
        }
        if(password.length == 0) {
            setPasswordError("Password is required!");
        }
        else if(email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if(email.indexOf('') >= 0) {
            setEmailError("Email cannot contain spaces")
        }
        else {
            setEmailError("")
            emailValid = true
        }

        if(emailValid){
            alert("Email: " + email + "\nPassword: " + password);

            setEmail("");
            setPassword("");
        }
    }

    return(
        <div>
            <Form onSubmit = {handleSubmit}>
                <Form.Group controlled="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter email"
                          onChange={event => setEmail(event.target.value)}
                          value={email}
                        />

                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>
                {emailError.length > 0 && 
                <Alert variant="danger">{emailError}</Alert>}

                <Form.Group controlled="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                      />
                </Form.Group>
                {passwordError.length > 0 && 
                <Alert variant="danger">{passwordError}</Alert>}

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            Email entered: {email}
            <br/>
            Password entered: {password}
        </div>
    );
}

export default UserForm;