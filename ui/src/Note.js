import styled from 'styled-components'

export const NoteWrapper = styled.div`
  padding: 2rem 3rem;
  border: 1px solid #4ff3be54;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 2rem;
  width: 500px;
`

export const Note = ({ children }) => <NoteWrapper>{children}</NoteWrapper>

export default Note
