import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontWeight: "bold",
  },
});

export default function BasicTable({ files }) {
  const classes = useStyles();

  const { winddirection, windspeed } = files;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>S/N </TableCell>
            <TableCell align="left" className={classes.tableHead}>
              Wind Direction File name
            </TableCell>
            <TableCell align="left" className={classes.tableHead}>
              WindSpeed File name
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.from(winddirection, (wind, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="left">{wind.name}</TableCell>
                <TableCell align="left">{windspeed[index].name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
