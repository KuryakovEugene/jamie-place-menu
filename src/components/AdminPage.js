import { Container, Grid } from "@mui/material";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import "../styles/Admin.css";

function AdminPage() {
  const { auth, firestore } = React.useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Container className="admin">
      <Grid container justify={"center"}>
        <div></div>
      </Grid>
    </Container>
  );
}

export default AdminPage;
