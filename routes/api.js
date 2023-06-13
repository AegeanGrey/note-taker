// Passes 'express' from server.js to use within api.js
const app = require('express').Router();
const savedNotes = require('../db/db.json');

// Pulls in save note data from db.json and displays it on /notes webpage
app.get('/notes', (req, res) => {
  res.json(savedNotes);
});

module.exports = app;
