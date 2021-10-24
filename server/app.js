const express = require('express')
const notes = require('./notes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/notes', (req, res, next) => {
  const { note } = req.body

  notes.addNote(note)

  res.send({ notes: notes.getNotes() })
})

app.get('/notes', (req, res, next) => {
  res.send({ notes: notes.getNotes() })
})

app.listen(4200, () => console.log('server running in port 3000'))
