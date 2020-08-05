import React from "react";
import "./styles.css";
import Child from "./Child";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  blueText: {
    color: "blue"
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Child parentClassName={classes.blueText} />
    </div>
  );
}
