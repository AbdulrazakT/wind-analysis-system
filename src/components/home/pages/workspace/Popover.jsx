import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },

  divContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function SimplePopover({ changeRoute, changeLocalRoute, name }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="text"
        color="primary"
        onClick={handleClick}
      >
        <Avatar className={classes.orange}>{name}</Avatar>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.divContainer}>
          <Typography>
            <Link onClick={() => changeLocalRoute("password")} href="#">
              {"Change Password"}
            </Link>
          </Typography>

          <Typography>
            <Link onClick={() => changeRoute("signin")} href="#">
              {"Logout"}
            </Link>
          </Typography>
        </div>
      </Popover>
    </div>
  );
}
