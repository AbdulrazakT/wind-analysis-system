import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import SummaryTable from "./SummaryTable";
import GraphTable from "./GraphTable";
import { useEffect } from "react";

export default function History() {
  const [summaries, setSummaries] = useState([]);
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/summaries")
      .then((response) => response.json())
      .then((results) => setSummaries(results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/graphs")
      .then((response) => response.json())
      .then((results) => setGraphs(results));
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="left" variant="h5" color="textPrimary">
            Wind Summaries:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SummaryTable summaries={summaries} />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h5" color="textPrimary">
            Wind Graphs:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <GraphTable graphs={graphs} />
        </Grid>
      </Grid>
    </div>
  );
}
