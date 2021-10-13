import React, { useContext } from "react";
import {withRouter} from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../styles/Admin.css";
import { Context } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from "react-router";
import {useAuthState} from "react-firebase-hooks/auth"
import {ADMIN_ROUTE} from "../utils/const"

function AdminLogin() {
  const { auth } = useContext(Context);

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    signInWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password")
    ).then((userCredentials) => {
      this.props.history.push("/AdminPage");
    });

    event.preventDefault();
  };

  return useAuthState(auth) ? (
    <Redirect to={ADMIN_ROUTE}></Redirect>
  ) : (
    <Container component="main" maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          focused
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          focused
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
}

export default withRouter(AdminLogin);
