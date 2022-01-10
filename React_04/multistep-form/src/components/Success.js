import React from "react";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 28 }}
        color="text.secondary"
        variant="h5"
        component="div"
      >
        Success!
      </Typography>
      <br />
      <Typography variant="body2">
        Your payment done successfully. <br /> <br />
        <strong>
          for any transaction related queries, please visit nearest branch or
          dial 1800 001 0073
        </strong>
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Success = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Success;
