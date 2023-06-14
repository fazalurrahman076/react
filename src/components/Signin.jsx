import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = () => {
    // Perform account creation logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your account creation code here
  };

  return (
    <div style={{ 
        color: "#fff",
        padding: "3em",
        backgroundColor: "#1B8EC2",
        textAlign:"center",
     }}>
      <Typography variant="body1">ACCOUNT SIGN IN</Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "800px",
          margin: "0 auto",
          minHeight: "calc(60vh - 80px)",
        }}
      >
        <Typography variant="body1">
          Sign in to your account to access your profile, history, and any
          private pages you've been granted access to.
        </Typography>

        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          variant="standard"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white", borderBottom: "2px solid white" },
          }}
          sx={{ width: "100%" }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
          variant="standard"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white", borderBottom: "2px solid white" },
          }}
          sx={{ width: "100%" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateAccount}
          sx={{
            marginTop: "1rem",
            fontSize: "15px",
            color: "rgb(48, 48, 48)",
            backgroundColor: "white",
            padding: "0.75rem 2rem",
            fontWeight: "bold",
          }}
        >
          SIGN IN
        </Button>
        <br />
        <Typography variant="body1">RESET PASSWORD</Typography>
        <br />
        <Typography variant="body1"><a href="/signup">Not a member? Create account.</a></Typography>
      </Box>
    </div>
  );
};

export default SignIn;