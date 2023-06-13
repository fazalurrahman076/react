import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#1B8EC2",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      margin: theme.spacing(4),
    },
  },
  image: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  title: {
    textAlign: "center",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#1B8EC2", padding: "2em", color: "#fff" }}>
      <Typography variant="body1">ABOUT US</Typography>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          src={
            "https://img1.wsimg.com/isteam/stock/87350/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
          }
          className={classes.image}
        />
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            Bufferites
          </Typography>
          <br />
          <Typography variant="body1" className={classes.title}>
            We are working with latest technologies to provide everyone a great
            platform to host their product and reach customers at every corner
            of the globe. Our technologies help us in providing a technology
            advanced platform at fair prices to our customers.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
