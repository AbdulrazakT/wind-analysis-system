import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import CustomizedSnackbars from "../workspace/Toast";

export default function ChangePassword() {
  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [status, setStatus] = useState("");

  const handleConfirm = () => {
    fetch("http://localhost:8080/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ old_password, new_password }),
    })
      .then((response) => response.json())
      .then((results) => {
        results === "Success"
          ? setStatus(results)
          : results === "Invalid cridentials"
          ? setStatus(results)
          : setStatus(results);
      });
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid align="left" item xs={12}>
          <TextField
            label="Old Password"
            variant="outlined"
            onChange={(e) => setOld_password(e.target.value)}
          />
        </Grid>

        <Grid align="left" item xs={12}>
          <TextField
            label="New Password"
            variant="outlined"
            onChange={(e) => setNew_password(e.target.value)}
          />
        </Grid>

        <Grid align="left" item xs={12}>
          <CustomizedSnackbars
            snackbar_purpose="confirm"
            confirm={handleConfirm}
            status={status}
          />
        </Grid>
      </Grid>
    </div>
  );
}
