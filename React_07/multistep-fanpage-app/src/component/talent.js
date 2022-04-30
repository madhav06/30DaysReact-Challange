import React, {useState} from 'react';
import { Avatar, Grid, Paper, TextField } from '@material-ui/core'
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 

function Talent()  {
    const paperStyle={padding: 9, height: '70vh', width: 290, margin: "20px auto"}
    const avtarStyle={backgroundColor: '#1bbd7e'}
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })
    const handleChange = e => {
       
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const talent = () => {
        const { first_name, last_name, username, email, password } = user
        if(first_name && last_name && username && email && password) {
            alert("Submitted Successfully!")
            axios.post("http://localhost:9002/api/sign-up/talent", user).then(res => console.log(res))
        } else {
            alert("Invalid input!")
        }
        
    }
    return(
        <Grid>
            {console.log(user)}
            <Paper  style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                TALENT SIGNUP
                </Grid>
                <TextField label='First name'  name="first_name" value={user.first_name} onChange={handleChange} placeholder='First name' fullWidth required />
                <TextField label='Last name'  name="last_name" value={user.last_name} onChange={handleChange} placeholder='Lastname name' fullWidth required />
                <TextField label='username'  name='username' value={user.username} onChange={handleChange} placeholder='Username' fullWidth required />
                <TextField label='Email'  name="email" value={user.email} onChange={handleChange} placeholder='Email' fullWidth required  type='email'/>
                <TextField label='Password'  name="password" value={user.password} onChange={handleChange} placeholder='Password' fullWidth required type='password'/>
                 <FormControlLabel 
                   control={
                       <Checkbox
                         name="checked"
                         color="primary" 
                        />
                   } label='I agree to the Terms and Conditions' />
                   <Button type='submit' color='green' fullWidth variant='contained' onClick={talent}>SIGN UP</Button>
            </Paper>
        </Grid>
    );
}
export default Talent;