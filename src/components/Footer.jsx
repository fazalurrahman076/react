import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: "auto",
  },
  content: {
    padding: theme.spacing(2),
    color: "#fff",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "20vh",
    backgroundColor: "#1B8EC2",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md" className={classes.content}>
        <footer className={classes.footer}>
          <Typography variant="body1" className={classes.content}>
            COPYRIGHT © 2023 BUFFER - ALL RIGHTS RESERVED.
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
