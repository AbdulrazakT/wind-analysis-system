import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button_cursor: {
    cursor: "pointer",
  },
}));

export default function SummaryTable({ summaries, downloadPrevReport }) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>S/N</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>{" "}
              </TableCell>
              <TableCell>
                <strong>Issue Time</strong>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summaries.length === 0 ? (
              <TableRow>
                <TableCell>
                  <Typography variant="body2" color="secondary">
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
                    <TableCell>
                      <Typography
                        className={classes.button_cursor}
                        onClick={() => downloadPrevReport(data)}
                        variant="button"
                        color="primary"
                      >
                        {data.name}
                      </Typography>
                    </TableCell>
                    <TableCell>{data.issued_at}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
