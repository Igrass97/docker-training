const notes = []

const getNotes = () => [...notes]

const addNote = (newNote) => notes.push(newNote)

module.exports = {
  getNotes,
  addNote,
}
