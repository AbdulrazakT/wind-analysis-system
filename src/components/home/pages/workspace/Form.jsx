import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, MenuItem, Grid } from "@material-ui/core";
import CustomizedSnackbars from "./Toast";

const timeAverages = [
  {
    value: "5",
    label: "5 yrs",
  },
  {
    value: "10",
    label: "10 yrs",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  gridCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

export default function Form({ submit }) {
  const classes = useStyles();
  const [time, setTime] = useState(5);
  const [station, setStation] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.gridCenter}>
          <TextField
            id="outlined-basic"
            label="Station name"
            variant="outlined"
            onChange={(e) => setStation(e.target.value)}
          />
        </Grid>

        <Grid item xs={6} className={classes.gridCenter}>
          <TextField
            id="outlined-select-currency"
            select
            label="Time Average"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
          >
            {timeAverages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} className={classes.gridCenter}>
          <CustomizedSnackbars snackbar_purpose="submit" submit={submit} />
        </Grid>
      </Grid>
    </form>
  );
}
