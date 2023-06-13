// Passes 'express' from server.js to use within index.js
const router = require('express').Router();

// Created constant that requires a path to api.js
const apiRouter = require('./api.js');

// Established routing to seperate/organize associated http requests
router.use('/api', apiRouter);

module.exports = router;
