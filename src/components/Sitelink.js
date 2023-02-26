import React from "react";
import classes from "./Sitelink.module.css";

export default function Sitelink(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.sitelink}
    >
      {props.title}
    </a>
  );
}
