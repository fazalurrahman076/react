import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  home: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    margin: "auto 10px",
    color: "#FFF",
    backgroundColor: "#1B8EC2",
    padding: "15px 30px", // Custom padding
    borderRadius: "8px", // Rounded corners
    fontSize: "18px", // Larger font size
    fontWeight: "bold", // Bold font weight
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Box shadow
    transition: "0.3s", // Smooth hover transition
    "&:hover": {
      backgroundColor: "#0D6381", // Darker background on hover
    },
  },
});

  const history = history();

  const handleSignupClick = () => {
    history.push('/signup');
  };

  const handleSigninClick = () => {
    history.push('/signip');
  };

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Button
      variant="outlined"
      onClick={handleSigninClick}
      className={classes.button} // Apply button styles
      >
        Sign in
      </Button>
      <Button
      variant="outlined"
      onClick={handleSignupClick}
      className={classes.button} // Apply button styles
      >
      Sign up
      </Button>
    </div>
  );
};

export default Home;