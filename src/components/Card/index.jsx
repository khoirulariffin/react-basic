import React from "react";
import "./style.css";

function Card(props) {
  const classes = "card " + props.className;

  return <main className={classes}>{props.children}</main>;
}

export default Card;
