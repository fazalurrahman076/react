import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateAccount = () => {
    // Perform account creation logic here
    console.log("Creating account...");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);
    // Add your account creation code here
  };

  return (
    <div style={{ color: "#fff", padding: "3em", backgroundColor: "#1B8EC2" }}>
      <Typography variant="body1">CREATE ACCOUNT</Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography variant="body1">
          By creating an account, you may receive newsletters or promotions.
        </Typography>

        <TextField
          label="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
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
          label="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
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
        <TextField
          label="Phone (Optional)"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
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
          CREATE ACCOUNT
        </Button>
        <br />
        <Typography variant="body1">
          Already have an account? Sign in
        </Typography>
        <br />
        <Typography variant="body1">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Typography>
      </Box>
    </div>
  );
};

export default CreateAccount;
