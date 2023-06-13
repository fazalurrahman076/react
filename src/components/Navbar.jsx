import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Menu, MenuItem } from "@material-ui/core";
import routes from "../routes";
import { useRoutes, A } from "hookrouter";

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
    "& A": {
      fontSize: "20px",
      fontFamily: "Calibri, sans serif",
      margin: theme.spacing(1),
      color: "#FFF",
      textDecoration: "none",
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

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownRef = useRef(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (route) => {
    console.log("Clicked:", route);
    handleMenuClose();
  };
  const routeResult = useRoutes(routes);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#1B8EC2" }}>
        <Toolbar>
          <div className={classes.centerAlign}>
            <br />

            <br />
            <div style={{ flexDirection: "row" }}>
            <Button
              variant="outlined"
              href="/"
              style={{ margin: "auto 10px", color: "#FFF", backgroundColor: "#1B8EC2", borderColor: "#FFF" }}
            >
              Home
            </Button>
            <Button
              variant="outlined"
              href="/contact"
              style={{ margin: "auto", color: "#FFF", backgroundColor: "#1B8EC2",borderColor: "#FFF" }}
              >contact us
              </Button>   
              <Button
              variant="outlined"
              href="/about"
              style={{ margin: "auto 10px", color: "#FFF", backgroundColor: "#1B8EC2", borderColor: "#FFF" }}
              >About us
              </Button>              
            </div>
            <br />
          </div>
          <IconButton color="inherit">
            <PersonIcon onClick={handleMenuOpen} ref={dropdownRef} />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
        classes={{ paper: classes.dropdownMenu }}
      >
        <MenuItem onClick={() => handleMenuItemClick("SignIn")}>
          Sign In
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("CreateAccount")}>
          Create Account
        </MenuItem>
        <hr className={classes.separator} />
        <MenuItem onClick={() => handleMenuItemClick("Orders")}>
          Orders
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("MyAccount")}>
          My Account
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
