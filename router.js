const express = require('express');
const shows = require('./controllers/shows');
const open_mics = require('./controllers/open_mics')

// Create the router
const router = express.Router();

// handle show requests
router.get('/shows', shows.index);
router.get('/shows/:date', shows.retrieve);
router.get('/open_mics', open_mics.index);
router.get('/open_mics/:date', open_mics.retrieve);

// Export the router
module.exports = router;
