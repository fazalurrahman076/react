import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#1B8EC2",
        padding: "4em",
        marginLeft: "3em",
        marginRight: "3em",
        color: "#fff",
      }}
    >
      <div className={classes.root}>
        <Typography variant="body1" className={classes.title}>
          CONTACT US
        </Typography>
        <br />
        <Typography variant="h5" className={classes.title}>
          We'd love to hear from you!
        </Typography>
        <br />
        <Typography variant="body1" className={classes.title}>
          Have questions about setting up for the first time, or transferring
          your content to us? Send us a message with any questions you have on
          our services, or details on your specific needs, and we'll get back to
          you shortly!
        </Typography>
        <br />
        <Typography variant="h5" className={classes.title}>
          Buffer
        </Typography>
      </div>
    </div>
  );
};

export default ContactUs;
