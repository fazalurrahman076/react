import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    backgroundColor: "#1780B0",
    color: "#fff",
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
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

const ImageAndTitle = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#1B8EC2", padding: "2em" }}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          src={
            "https://img1.wsimg.com/isteam/stock/1373/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1833,h:1440,cg:true/fx-gs"
          }
          className={classes.image}
        />
        <CardContent>
          <Typography variant="body1" className={classes.title}>
            WELCOME TO BUFFER
          </Typography>
          <Typography variant="h2" className={classes.title}>
            Domain Registration and Web Hosting
          </Typography>
          <Typography variant="body1" className={classes.title}>
            Scale Fast, Survive Disaster and Thrive Everywhere
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" href="/">
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageAndTitle;
