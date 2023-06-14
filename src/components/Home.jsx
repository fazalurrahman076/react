import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  home: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "calc(90vh - 100px)",
  },
  button: {
    margin: "auto 10px",
    color: "#FFF",
    backgroundColor: "#1B8EC2",
    padding: "15px 30px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#0D6381",
    },
  },
});

const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.home}>
      <Button
        variant="outlined"
        className={classes.button}
        href="/signin"
      >
        Sign in
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        href="/signup"
      >
        Sign up
      </Button>
    </div>
  );
};

export default Home;