const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();
const PORT = 3001;

// Utilizes Middleware within routes/index.js
app.use(routes);

// Middleware that (by default) takes the user to index.html within the public folder
app.use(express.static('public'));

// When the /notes route is requested within the URL,
app.get('/notes', (req, res) => {

  // the webpage will then display notes.html
  res.sendFile(path.join(__dirname, '/public/webpages/notes.html'))
});

// Redirects user to homepage if they input an invalid url request
app.get('*', (req, res) => {
  res.send(`Invalid URL, please return to <a href="http://localhost:${PORT}">homepage</a>`)
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
