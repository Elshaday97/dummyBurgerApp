import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = ({ label, added, deleted, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}> {label}</div>
      <button className={classes.Less} onClick={deleted} disabled={disabled}>
        Less
      </button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
