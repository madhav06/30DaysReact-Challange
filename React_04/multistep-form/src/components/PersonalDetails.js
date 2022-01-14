import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { ErrorSharp } from "@material-ui/icons";

const PersonalDetails = ({ nextStep, prevStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const useStyles = makeStyles({
    button1: {
      backgroundColor: "#04AA6D" /* Green */,
      borderRadius: "12px",
      display: "inline-block",
      margin: "20px",
      marginLeft: "-5px",
    },
    button2: {
      backgroundColor: "#04AA6D" /* Green */,
      borderRadius: "12px",
      display: "inline-block",
      margin: "30px",
      marginTop: "20px",
      marginLeft: "0.4px",
    },

    button3: {
      backgroundColor: "#04AA6D" /* Green */,
      borderRadius: "12px",
      display: "inline-block",
      margin: "30px",
      marginTop: "20px",
      marginLeft: "0.4px",
    },
  });

  const classes = useStyles();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required";
    } else if (!regex.test(values.username)) {
      errors.username = "Username looks good!";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be atleast 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container" alignItems="center">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"> success </div>
      ) : (
        ""
      )}
      <form>
        <h1>STEP 2</h1>
        <Typography>Personal Details</Typography>
        <div className="ui form">
          <Grid>
            <TextField
              type="text"
              label="Email:"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </Grid>

          <Grid>
            <TextField
              type="text"
              label="Username:"
              name="username"
              placeholder="Username"
              autoComplete="off"
              value={formValues.username}
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
          </Grid>

          <Grid>
            <TextField
              type="password"
              label="Password:"
              name="password"
              id="password"
              autoComplete="off"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </Grid>
        </div>
        <Grid>
          {/*submit*/}
          <Button
            sx={{ px: 3 }}
            padding
            left
            right
            margin
            top
            bottom
            className={classes.button3}
            type="submit"
            variant="contained"
            fullWidth
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        {/*previous*/}
        <Button
          className={classes.button1}
          onClick={Previous}
          type="submit"
          variant="contained"
          fullWidth
        >
          Previous
        </Button>

        {/*next*/}

        <Button
          className={classes.button2}
          onClick={Continue}
          type="submit"
          variant="contained"
          fullWidth
        >
          Next
        </Button>
      </form>
    </div>
  );
};
export default PersonalDetails;
