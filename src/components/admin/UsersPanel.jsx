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
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  btn_margin: {
    marginLeft: "16px",
  },
}));

const UsersPanel = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/all_climate_analysts")
      .then((response) => response.json())
      .then((results) => setUsers(results));
    return () => {};
  });

  const deleteFile = (file) => {
    fetch("http://localhost:8080/delete_user", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: file.id,
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
                  <strong>FIRST NAME</strong>
                </TableCell>
                <TableCell>
                  <strong>LAST NAME</strong>
                </TableCell>
                <TableCell>
                  <strong>EMPLOYMENT ID</strong>
                </TableCell>
                <TableCell>
                  <strong>EMAIL</strong>
                </TableCell>
                <TableCell>
                  <strong>ROLE</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>ACTION</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" color="secondary">
                      No data!
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{user.firstname}</TableCell>
                      <TableCell>{user.lastname}</TableCell>
                      <TableCell>{user.employmentid}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.role === 1 ? "Climate Analyst" : "System Admin"}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          size="small"
                          variant="text"
                          color="primary"
                          startIcon={<EditOutlinedIcon />}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => deleteFile(user)}
                          size="small"
                          variant="text"
                          color="secondary"
                          startIcon={<DeleteForeverOutlinedIcon />}
                          className={classes.btn_margin}
                        >
                          Delete
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

export default UsersPanel;
