import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Note from './Note'
import AddNote from './AddNote'

import { NOTES } from './constants/api'

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #161728;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`

function App() {
  const [isLoading, setIsLoading] = useState()
  const [isAddingNote, setIsAddingNote] = useState()

  const [notes, setNotes] = useState([])

  const handleAddNote = (note) => {
    setIsAddingNote(true)
    fetch(NOTES, {
      method: 'POST',
      body: JSON.stringify({ note }),
      headers: { 'Content-type': 'application/json' },
    })
      .then((r) => r.json())
      .then(({ notes }) => setNotes(notes))
  }

  useEffect(() => {
    setIsLoading(true)

    fetch(NOTES)
      .then((r) => r.json())
      .then(({ notes }) => {
        setNotes(notes)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading..</h1>

  return (
    <AppWrapper>
      {notes.map((note) => (
        <Note key={note}>{note}</Note>
      ))}
      <AddNote onAddNote={handleAddNote} isAddingNote={isAddingNote} />
    </AppWrapper>
  )
}

export default App
