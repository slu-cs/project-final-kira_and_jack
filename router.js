const express = require('express');
const shows = require('./controllers/shows');
const open_mics = require('./controllers/open_mics')
const suggestions = require('./controllers/suggestions')
const signups = require('./controllers/signups')

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// handle content requests
router.get('/shows', shows.index);
router.get('/shows/:date', shows.retrieve);
router.get('/open_mics', open_mics.index);
router.get('/open_mics/:date', open_mics.retrieve);
router.get('/suggestions', suggestions.index);
router.get('/signups', signups.index);
router.get('/suggestions/thanks', suggestions.thanks)

// post requests
router.post('/suggestions', suggestions.create);
router.post('/signups', signups.create);
router.post('/shows', authorize, shows.create);
router.post('/open_mics', authorize, open_mics.create);

// delete requests
router.delete('/suggestions', authorize, suggestions.delete);
router.delete('/shows', authorize, shows.delete);
router.delete('/signups', authorize, signups.delete);
router.delete('/open_mics', authorize, open_mics.delete);

// Export the router
module.exports = router;
