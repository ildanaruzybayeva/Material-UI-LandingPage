import React from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header";
import Content from "./Components/Content";
import SelectMenu from "./Components/Select";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <SelectMenu />
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
