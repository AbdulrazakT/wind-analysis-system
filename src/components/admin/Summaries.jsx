import React from "react";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const Summaries = () => {
  const [total, setTotal] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/total_summaries")
      .then((response) => response.json())
      .then((total) => setTotal(total));
    return () => {};
  });
  return (
    <div>
      <Typography variant="h6" color="initial">
        <strong> TOTAL WIND SUMMARIES:</strong>
      </Typography>
      <br />
      <Typography variant="h6" color="primary">
        {total <= 0 ? (
          <Typography variant="body2" color="secondary">
            No Climate Summaries!
          </Typography>
        ) : (
          total
        )}
      </Typography>
    </div>
  );
};

export default Summaries;
