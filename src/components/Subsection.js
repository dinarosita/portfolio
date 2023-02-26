import React from 'react'
import classes from "./Subsection.module.css"

export default function Subsection(props) {
  return (
    <section className={classes.subsection
    }>
      {props.children}
    </section>
  )
}
