import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const PayDetails = ({ nextStep, prevStep, handleChange, values }) => {
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
          STEP 1: Payment Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/*firsttname*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Pay"
                label="Pay:"
                onChange={handleChange("payA")}
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
export default PayDetails;
