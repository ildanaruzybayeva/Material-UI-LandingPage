import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import HeaderMenu from "./HeaderMenu";
import React from "react";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This is de header
        </Typography>
        <AllInclusiveOutlinedIcon />
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
