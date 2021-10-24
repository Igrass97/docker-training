const express = require('express')
const notes = require('./notes')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'ui-build')))

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

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'ui-build', 'index.html'))
})

app.listen(3000, () => console.log('server running in port 3000'))
