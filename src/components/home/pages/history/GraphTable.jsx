import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function GraphTable({ graphs }) {
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
            {graphs.length === 0 ? (
              <TableRow>
                <TableCell>
                  <Typography variant="body2" color="secondary">
                    No data!
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              graphs.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{data.name}</TableCell>
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
