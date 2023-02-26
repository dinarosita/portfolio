import React from 'react'
import classes from "./Mainsection.module.css"

export default function Mainsection(props) {
  return (
    <section className={classes.mainsection}>
      {props.children}
    </section>
  )
}
