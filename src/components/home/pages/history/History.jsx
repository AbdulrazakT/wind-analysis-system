import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import SummaryTable from "./SummaryTable";
import GraphTable from "./GraphTable";
import { useEffect } from "react";

// Axios
import Axios from "axios";
import fileDownload from "js-file-download";

export default function History() {
  const [summaries, setSummaries] = useState([]);
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/summaries")
      .then((response) => response.json())
      .then((results) => setSummaries(results))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/graphs")
      .then((response) => response.json())
      .then((results) => setGraphs(results));
    return () => {};
  }, []);

  const downloadPrevReport = async (file) => {
    Axios({
      url: "http://localhost:8080/download",
      method: "POST",
      responseType: "blob",
      data: { file__path: file.report },
    }).then((response) => {
      fileDownload(response.data, file.name);
    });
  };

  const downloadPrevGraph = async (file) => {
    Axios({
      url: "http://localhost:8080/download",
      method: "POST",
      responseType: "blob",
      data: { file__path: file.graph },
    }).then((response) => {
      fileDownload(response.data, file.name);
    });
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="left" variant="h5" color="textPrimary">
            Wind Summaries:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SummaryTable
            summaries={summaries}
            downloadPrevReport={downloadPrevReport}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h5" color="textPrimary">
            Wind Graphs:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <GraphTable graphs={graphs} downloadPrevGraph={downloadPrevGraph} />
        </Grid>
      </Grid>
    </div>
  );
}
