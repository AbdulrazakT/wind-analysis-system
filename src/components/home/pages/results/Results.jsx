import React from "react";
import {
  Divider,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

// For file download
import Axios from "axios";
import fileDownload from "js-file-download";

export default function Results() {
  const downloadSummary = async () => {
    Axios({
      url: "http://localhost:8080/download_summary",
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      response.data.type === "application/json"
        ? console.log("Nothing to download")
        : fileDownload(response.data, "Summary.csv");
    });
  };

  const downloadGraph = async () => {
    Axios({
      url: "http://localhost:8080/download_graph",
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      response.data.type === "application/json"
        ? console.log("Nothing to download")
        : fileDownload(response.data, "Graph.pdf");
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="body1">
                <strong>Climate Summary </strong>
              </Typography>
              <Divider />
            </CardContent>
            <CardActions>
              <Button
                onClick={downloadSummary}
                variant="contained"
                color="primary"
                startIcon={<GetAppIcon />}
              >
                Download Climate Summary
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="body1">
                <strong>Wind Graph </strong>
              </Typography>
              <Divider />
            </CardContent>
            <CardActions>
              <Button
                onClick={downloadGraph}
                variant="contained"
                color="primary"
                startIcon={<GetAppIcon />}
              >
                Download Wind Graphs
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
