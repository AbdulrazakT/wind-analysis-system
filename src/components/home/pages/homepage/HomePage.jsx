import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "left",
  },
}));
const HomePage = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>
        <strong>{`Welcome ${user.firstname} ${user.lastname}`}</strong>
      </h3>
      <Divider />
      <Typography variant="caption">
        You have successfully loged into the Wind Analytics and Visulization
        Tool.
      </Typography>
      <br />
      <Typography variant="caption">
        You can access System functionalities by following appropriate links on
        the menu side. Following is further information about the links :
      </Typography>
      <br />
      <ul>
        <li>
          <Typography variant="caption">
            <strong>Workspace:</strong>
          </Typography>
          <br />
          <Typography variant="caption">
            This is the Core Part of the system. Here, you upload your climate
            data and get a <strong>Climate Summary</strong> as well as visualize{" "}
            <strong>Wind Graphs.</strong>
          </Typography>

          <br />
          <Typography color="error" variant="caption">
            However you need to consider the following before uploading your
            data into the system:
          </Typography>

          <br />
          <Typography variant="caption">
            <ol>
              <li>
                All data should be in <strong>csv format</strong>
              </li>
              <li>
                Data should be clean: i.e. no missing data cells and ensure
                correct data type formats
                <br />
                NB: Replace any missing data cells with <strong>NA</strong>
              </li>
            </ol>
          </Typography>
        </li>
        <li>
          <Typography variant="caption">
            <strong>Results:</strong>
          </Typography>

          <br />

          <Typography variant="caption">
            Here you'll find your generated Climate Summaries and Wind Graphs,
            ready for you to download
          </Typography>
        </li>
      </ul>
      <Divider />
    </div>
  );
};

export default HomePage;
