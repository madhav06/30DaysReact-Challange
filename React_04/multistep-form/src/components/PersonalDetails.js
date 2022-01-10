import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Textarea,
  Button,
} from "@material-ui/core";

const PersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          STEP 3: SignUp Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/*username*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Username"
                label="Username:"
                onChange={handleChange("username")}
                defaultValue={values.username}
                fullWidth
              />
            </Grid>
            <br />
            {/*email*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Email"
                label="Email:"
                onChange={handleChange("email")}
                defaultValue={values.email}
                fullWidth
              />
            </Grid>
            <br />
            {/*password*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Password"
                label="Password:"
                onChange={handleChange("password")}
                defaultValue={values.password}
                fullWidth
              />
            </Grid>
            <br />
            {/*prev*/}
            <Grid>
              <Button
                onClick={Previous}
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Previous
              </Button>
            </Grid>
            {/*next*/}
            <Grid>
              <Button
                onClick={Continue}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PersonalDetails;
