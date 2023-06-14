import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  imageWrapper: {
    position: "relative",
    textAlign: "center",
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the opacity (last value) as needed for desired darkness
  },
  heading: {
    position: "relative",
    left: theme.spacing(1),
    top: theme.spacing(2),
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  captionWrapper: {
    position: "absolute",
    bottom: theme.spacing(10),
    width: "100%",
    textAlign: "center",
    backgroundColor: "#16161680",
    padding: theme.spacing(2),
    margin: theme.spacing(0, 1, 2, 1),
  },
  caption: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
}));

const Review = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              className={classes.imageWrapper}
              style={{
                backgroundImage: `url("https://www.antidote.me/hs-fs/hubfs/damian-zaleski-843-742572-edited-(1).jpg?width=1350&name=damian-zaleski-843-742572-edited-(1).jpg")`,
              }}
            >
              <div className={classes.imageOverlay}></div>
              <Typography className={classes.heading}>Reviews</Typography>
              <div className={classes.captionWrapper}>
                <Typography className={classes.caption}>
                  Reviews coming soon!
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Review;
