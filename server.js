const express = require('express');
const path = require('path');
const savedNoteData = require('./db/db.json');

const app = express();
const PORT = 3001;

// Takes the user to index.html within the public folder by default
app.use(express.static('public'));

// When the /notes route is requested within the URL,
app.get('/notes', (req, res) =>

  // the webpage will then display notes.html
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// pulls in save note data from db.json and displays it on /notes
app.get('/api/notes', (req, res) => res.json(savedNoteData));

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
