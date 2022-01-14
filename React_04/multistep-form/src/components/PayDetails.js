import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";
import { borderRadius } from "@mui/system";

const PersonalDetails = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  handleSubmit,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
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
  });

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          STEP 3: Payment Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/*firsttname*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Pay"
                label="Pay:"
                onChange={handleChange("payAmount")}
                defaultValue={values.payAmount}
                fullWidth
              />
            </Grid>
            <br />
            {/*lastname*/}
            <Grid item xs={12}>
              <TextField
                placeholder="Comment"
                label="Comment:"
                onChange={handleChange("addComment")}
                defaultValue={values.addComment}
                fullWidth
              />
            </Grid>
            <br />
            {/*prev*/}
            <Grid item xs={12} sm={6}>
              <Button
                className={classes.button1}
                onClick={Previous}
                type="submit"
                variant="contained"
                fullWidth
              >
                Previous
              </Button>
            </Grid>
            {/*next*/}
            <Grid item xs={12} sm={6}>
              <Button
                className={classes.button2}
                onClick={Continue}
                type="submit"
                variant="contained"
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
