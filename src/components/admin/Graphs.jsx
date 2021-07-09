import React from "react";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const Graphs = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8080/total_graphs")
      .then((response) => response.json())
      .then((total) => setTotal(total));
    return () => {};
  });
  return (
    <div>
      <Typography variant="h6" color="initial" >
        <strong> TOTAL GRAPHS:</strong>
      </Typography>
      <br />
      <Typography variant="h6" color="primary">
        {total <= 0 ? (
          <Typography variant="subtitle1" color="secondary">
            No Graphs!
          </Typography>
        ) : (
          total
        )}
      </Typography>
    </div>
  );
};

export default Graphs;
