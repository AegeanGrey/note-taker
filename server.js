const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware that takes in anything JSON related before passing to 'api.js'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  res.send(`Invalid URL, please return to <a href="https://noteynotes-a2993dbf9bbe.herokuapp.com">homepage</a>`)
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
});
