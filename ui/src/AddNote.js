import styled from 'styled-components'

import { NoteWrapper } from './Note'

const NoteInput = styled.input`
  height: 40px;
  outline: none;
  border: 1px solid #4ff3be54;
  margin-right: 1rem;
  font-size: 18px;
  padding: 0 0.7rem;
`

const AddNoteButton = styled.button`
  height: 40px;
  border: none;
  background-color: #4ff3be54;
  color: #fff;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #10ffe954;
  }
`

export const AddNote = ({ onAddNote, isAdddingNote }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onAddNote(e.target.note.value)
    e.target.note.value = ''
  }

  return (
    <NoteWrapper>
      {isAdddingNote ? (
        'Adding...'
      ) : (
        <form onSubmit={handleSubmit}>
          <NoteInput type="text" name="note" />
          <AddNoteButton type="submit">Add note</AddNoteButton>
        </form>
      )}
    </NoteWrapper>
  )
}

export default AddNote
