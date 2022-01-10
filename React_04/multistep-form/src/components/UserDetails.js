import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const UserDetails = ({ nextStep, prevStep, values, handleChange }) => {
  // for continue event Listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          STEP 1: User Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/*firsttname*/}
            <Grid item xs={12}>
              <TextField
                placeholder="First Name"
                label="First Name:"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                fullWidth
              />
            </Grid>
            <br />
            {/*lastname*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Last Name"
                label="Last Name:"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                fullWidth
              />
            </Grid>
          </Grid>
          <br />
          {/*next*/}
          <Button
            onClick={Continue}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Next{" "}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserDetails;
