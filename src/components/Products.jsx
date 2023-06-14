import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    backgroundColor: "#1780B0",
    padding: theme.spacing(4),
    margin: theme.spacing(0, 15, 0, 15),
    minHeight: "calc(60vh - 80px)",
  },
  message: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{ backgroundColor: "#1B8EC2", padding: "2em", color: "#fff", textAlign:"center" }}
      >
        <Typography variant="h5">All Products</Typography>
        <br />
        <div className={classes.root}>
          <Typography variant="h5" className={classes.message}>
            New products are coming soon!
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Products;
