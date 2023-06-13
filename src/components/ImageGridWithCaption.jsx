import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imageWrapper: {
    position: "relative",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heading: {
    position: "relative",
    left: theme.spacing(1),
    top: theme.spacing(2),
    color: "#fff",
    fontSize: "26px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  title: {
    color: "#1B8EC2",
  },
  caption: {
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(1),
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
}));

const ImageGridWithCaption = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "3em" }}>
      <Typography variant="body1" className={classes.title}>
        SERVICES
      </Typography>
      <br />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.imageWrapper}
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/205505/pexels-photo-205505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
              }}
            >
              <Typography className={classes.heading}>
                Domain Registration
              </Typography>
              <Typography className={classes.caption}>
                I'm your Services section. Click to edit and tell your visitors
                more about your domain registration. What is included with this
                service? How much does it cost?
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.imageWrapper}
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/1010496/pexels-photo-1010496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
              }}
            >
              <Typography className={classes.heading}>
                Website Hosting
              </Typography>
              <Typography className={classes.caption}>
                I'm your Services section. Click to edit and tell your visitors
                more about your website hosting. What is included with this
                service?
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.imageWrapper}
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
              }}
            >
              <Typography className={classes.heading}>
                SSL Certificates
              </Typography>
              <Typography className={classes.caption}>
                I'm your Services section. Click to edit and tell your visitors
                more about your SSL certificates. What is included with this
                service?
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ImageGridWithCaption;
