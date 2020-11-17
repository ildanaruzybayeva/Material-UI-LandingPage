import React from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./Theme";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>Navbar </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          Content goes here Content goes here Content goes here Content goes
          here Content goes here Content goes here Content goes here Content
          goes here Content goes here
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
