import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    payAmount,
    addComment,
  } = values;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container>
      <div>
        <Typography>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Username" secondary={username} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Password" secondary={password} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pay" secondary={payAmount} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comment" secondary={addComment} />
            </ListItem>
          </List>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Confirm and Continue
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </Container>
  );
};

export default Confirmation;
