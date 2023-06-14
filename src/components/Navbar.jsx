import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    padding: theme.spacing(0, 0, 0, 16),
    "& button": {
      fontSize: "20px",
      fontFamily: "Calibri, sans serif",
    },
    "& a": {
      fontSize: "20px",
      fontFamily: "Calibri, sans serif",
      margin: theme.spacing(1),
      color: "#FFF",
      textDecoration: "none",
    },
  },
  dropdownMenu: {
    backgroundColor: "#1B8EC2",
    color: "#FFF",
  },
  separator: {
    margin: theme.spacing(2),
    border: 0,
    borderTop: `1px solid rgb(34, 170, 231)`,
  },
}));

export const Navbar = ( { } ) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#1B8EC2" }}>
        <Toolbar>
          <div className={classes.centerAlign}>
            <br />
            <Button
              variant="outlined"
              href="/"
              style={{ margin:"auto", color: "#FFF", borderColor: "#FFF" }}
            >
              Buffer
            </Button>
            <br />
            <div style={{ flexDirection: "row" }}>
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="/about" className={classes.link}>
                About us
              </a>
              <a href="/contact" className={classes.link}>
                Contact us
              </a>
              <a href="/products" className={classes.link}>
                Products
              </a>
              <a href="/review" className={classes.link}>
                Reviews
              </a>
            </div>
            <br />
          </div>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;