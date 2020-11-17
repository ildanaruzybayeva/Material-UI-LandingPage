import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./Theme";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color
  }
});

export default function App() {
  const classes = useStyles();
  return <div className="App">Hi</div>;
}
