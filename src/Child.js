import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  redText: {
    color: "red"
  }
});

const Child = props => {
  const classes = useStyles();

  return (
    <div className={classes.redText + " " + props.parentClassName}>
      I am red
    </div>
  );
};

export default Child;
