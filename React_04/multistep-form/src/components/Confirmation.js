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
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";

const Confirmation = ({
  prevStep,
  nextStep,
  values,
  handleChange,
  handleSubmit,
}) => {
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

  const useStyles = makeStyles({
    container: {
      maxBlockSize: "240px",
      textDecoration: "none",
      border: "outlined",
      marginLeft: "15px",
      marginRight: "5px",
    },
    firstname: {
      paddingTop: "20px",
      textAlign: "center",
      float: "23px",
    },
    lastname: {
      paddingTop: "20px",
      textAlign: "center",
    },
    email: {
      paddingTop: "20px",
      textAlign: "center",
    },
    password: {
      paddingTop: "20px",
      textAlign: "center",
    },
    pay: {
      textAlign: "center",
    },
    comment: {
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div>
        <Typography>
          <List className={classes.lists} spacing={2}>
            <ListItem className={classes.items}>
              <ListItemText
                className={classes.firstname}
                primary="First Name:"
                secondary={firstName}
              />
            </ListItem>
            <ListItem className={classes.items}>
              <ListItemText
                className={classes.lastname}
                primary="Last Name:"
                secondary={lastName}
              />
            </ListItem>
            <ListItem className={classes.items}>
              <ListItemText
                className={classes.email}
                primary="Email:"
                secondary={email}
              />
            </ListItem>
            <ListItem className={classes.items}>
              <ListItemText
                className={classes.password}
                primary="Username:"
                secondary={username}
              />
            </ListItem>
            <ListItem className={classes.items}>
              <ListItemText
                className={classes.password}
                primary="Password:"
                secondary={password}
              />
            </ListItem>
            <ListItem className={classes.override}>
              <ListItemText
                className={classes.pay}
                primary="Pay:"
                secondary={payAmount}
              />
            </ListItem>
            <ListItem className={classes.override}>
              <ListItemText
                className={classes.comment}
                primary="Comment:"
                secondary={addComment}
              />
            </ListItem>
          </List>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={8} sm={3}>
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
            <Grid item xs={8} sm={3}>
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
