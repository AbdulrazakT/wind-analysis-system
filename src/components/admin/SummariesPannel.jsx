import React from "react";
import {
  Grid,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Paper,
  TableBody,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { useEffect, useState } from "react";

// For file download
import Axios from "axios";
import fileDownload from "js-file-download";

const useStyles = makeStyles((theme) => ({
  btn_margin: {
    marginLeft: "16px",
  },
}));

const SummariesPannel = () => {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/all_climate_summaries")
      .then((response) => response.json())
      .then((results) => setSummaries(results));
    // return () => {};
  }, [summaries]);

  const downloadFile = (file) => {
    Axios({
      url: "http://localhost:8080/download",
      method: "POST",
      responseType: "blob",
      data: { file__path: file.report },
    }).then((response) => {
      response.data.type === "application/json"
        ? alert("Nothing to download, please submit files first!")
        : fileDownload(response.data, file.name);
    });
  };

  const deleteFile = (file) => {
    fetch("http://localhost:8080/delete_summary", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: file.report_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          console.log("Deleted");
        }
      });
  };

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>S/N</strong>
                </TableCell>
                <TableCell>
                  <strong>File ID</strong>
                </TableCell>
                <TableCell>
                  <strong>REPORT NAME</strong>
                </TableCell>
                <TableCell>
                  <strong>GENERATED BY</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>PATH</strong>
                </TableCell>
                <TableCell>
                  <strong>ISSUE DATE</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>ACTION</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summaries.length === 0 ? (
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" color="secondary">
                      No data!
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                summaries.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{data.report_id}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>
                        {data.firstname} {data.lastname}
                      </TableCell>
                      <TableCell>{data.report}</TableCell>
                      <TableCell>{data.issued_at}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="text"
                          color="primary"
                          onClick={() => downloadFile(data)}
                          className={classes.btn_margin}
                          startIcon={<GetAppOutlinedIcon />}
                        >
                          Download
                        </Button>
                        <Button
                          variant="text"
                          color="secondary"
                          onClick={() => deleteFile(data)}
                          startIcon={<DeleteForeverOutlinedIcon />}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SummariesPannel;
