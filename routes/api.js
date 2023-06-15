// Passes 'express' from server.js to use within api.js
const app = require('express').Router();
const readAndAppend = require('../helpers/fsUtils');
const fs = require('fs');


// Pulls in save note data from db.json and displays it on /notes webpage
app.get('/notes', (req, res) => {

  // savedNotes reads the data within db.json
  const savedNotes = fs.readFileSync('./db/db.json');

  // process parses any data to the body within savedNotes
  const process = JSON.parse(savedNotes);
  
  // Responds by parsing new save note data to the body in db.json
  res.json(process);
});

app.post('/notes', (req, res) => {
  // logs the terminal stating that the user input was received
  console.info(`${req.body.title} note recieved`);
    
  // title and text are constants for the required body
  const { title, text } = req.body
  
  // if there is data within req.body
  if (req.body) {

    // then it will pass the data into the newNote constant
    const newNote = {
      title,
      text
    };

    // calls readAndAppend with file to format newNote data with
    readAndAppend(newNote, './db/db.json');
    res.json(`${req.body.title} note has been added!`);
  } else {

    // otherwise it will display the following error message
    res.error('Unable to add note at this time');
  }
});

module.exports = app;
