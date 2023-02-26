import React from 'react'
import Mainsection from '../components/Mainsection'
import CodingNotes from './CodingNotes'
import CodingTutorialProjects from './CodingTutorialProjects'

export default function Coding() {
  return (
    <Mainsection>
        <h2>CODING</h2>
        <CodingNotes />
        <CodingTutorialProjects />
    </Mainsection>
  )
}
