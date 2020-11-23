import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";
import data from "./data";

const Content = () => {
  const CoffeList = data.map((obj) => (
    <Grid key={obj.id} item xs={12} sm={6} md={4} data-testid="single-item">
      <CoffeCard key={obj.id} info={obj.info} description={obj.description} />
    </Grid>
  ));
  return (
    <Grid container spacing={4} data-testid="list-item">
      {CoffeList}
    </Grid>
  );
};

export default Content;
