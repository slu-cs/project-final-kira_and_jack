const express = require('express');
const shows = require('./controllers/shows');
const open_mics = require('./controllers/open_mics')
const suggestions = require('./controllers/suggestions')
const signups = require('./controllers/signups')

// Create the router
const router = express.Router();

// handle content requests
router.get('/shows', shows.index);
router.get('/shows/:date', shows.retrieve);
router.get('/open_mics', open_mics.index);
router.get('/open_mics/:date', open_mics.retrieve);
router.get('/suggestions', suggestions.index);
router.get('/signups', signups.index);

// new suggestion
router.post('/suggestions', suggestions.create);
router.post('/signups', signups.create)

// Export the router
module.exports = router;
