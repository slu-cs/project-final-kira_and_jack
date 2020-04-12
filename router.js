const express = require('express');
const shows = require('./controllers/shows');

// Create the router
const router = express.Router();

// handle show requests
router.get('/shows', shows.index);
router.get('/shows/:date', shows.retrieve);
router.get('/open_mics', shows.retrieve);
router.get('/open_mics/:date', shows.retrieve);

// Export the router
module.exports = router;
