import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import SimpleAccordion from "./Accordion";
import Form from "./Form";

// const useStyles = makeStyles({
//   btn: {
//     width: "25%",
//   },
// });

const Workspace = () => {
  // const classes = useStyles();
  const [winddirection, setWinddirection] = useState({});
  const [windspeed, setWindspeed] = useState([]);
  const [files, setFiles] = useState({ winddirection: [], windspeed: [] });

  const viewFiles = () => {
    setFiles({ winddirection, windspeed });
  };

  const data = new FormData();

  for (let i = 0; i < 12; i++) {
    data.append("wd", winddirection[i]);
    data.append("ws", windspeed[i]);
  }

  const handleSubmit = () => {
    fetch("http://localhost:8080/upload", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <Card>
              <CardContent>
                <Typography align="left" variant="body1">
                  <strong>Wind Direction: </strong>
                </Typography>
                <Divider />
                <CardActions>
                  <input
                    type="file"
                    name="windDirection"
                    multiple
                    onChange={(e) => setWinddirection(e.target.files)}
                  />
                </CardActions>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Card>
              <CardContent>
                <Typography align="left" variant="body1">
                  <strong>Wind Speed: </strong>
                </Typography>
                <Divider />
                <CardActions>
                  <input
                    type="file"
                    name="windDirection"
                    multiple
                    onChange={(e) => setWindspeed(e.target.files)}
                  />
                </CardActions>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <SimpleAccordion files={files} viewFiles={viewFiles} />
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Form submit={handleSubmit} files={files} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Workspace;
