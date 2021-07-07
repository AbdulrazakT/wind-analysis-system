import React from "react";
import { Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({
  submit,
  snackbar_purpose,
  confirm,
  status,
  files,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    submit(files);
    setOpen(true);
  };

  const handleConfirm = () => {
    confirm();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {snackbar_purpose === "submit" ? (
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Submit
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Submitted successfully!
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <div>
          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
          {
            (status = "Success" ? (
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {status}
                </Alert>
              </Snackbar>
            ) : (
              (status = "Success" ? (
                <Alert onClose={handleClose} severity="error">
                  {status}
                </Alert>
              ) : (
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="error">
                    {status}
                  </Alert>
                </Snackbar>
              ))
            ))
          }
        </div>
      )}
    </div>
  );
}
