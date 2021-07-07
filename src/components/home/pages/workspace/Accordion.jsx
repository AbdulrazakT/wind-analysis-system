import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BasicTable from "./Table";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ files, viewFiles }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => viewFiles()}
          >
            <Typography className={classes.heading}>
              View Chosen Files
            </Typography>
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          {files.winddirection.length && files.windspeed.length ? (
            <BasicTable files={files} />
          ) : (
            <Typography>No chosen files!</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
