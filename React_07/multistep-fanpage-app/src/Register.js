import React, { Component } from 'react';
import './App.css';

function Register() {
    return(
        <div className='col-sm-6 offset-sm-3'>
            <h1>Register Page</h1>
            <input type="text" className='form-control' placeholder='first_name' />
            <br/>
            <input type="text" className='form-control' placeholder='last_name' />
            <br/>
            <input type="text" className='form-control' placeholder='username'  />
            <br/>
            <input type="email"className='form-control' placeholder='email'     />
            <br/>
            <input type="password" className='form-control' placeholder='password' />
            <br/>
            <button className='btn btn-primary'>Sign Up</button>
        </div>
    )
}

export default Register;