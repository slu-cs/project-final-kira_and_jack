const express = require('express');
const shows = require('./controllers/shows');
const open_mics = require('./controllers/open_mics')
const suggestions = require('./controllers/suggestions')

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
router.get('/shows/:id', shows.retrieve);
router.get('/open_mics', open_mics.index);
router.get('/open_mics/:date', open_mics.retrieve);
router.get('/suggestions', suggestions.index);
router.get('/suggestions/thanks', suggestions.thanks)

// post requests
router.post('/suggestions', suggestions.create);
router.post('/shows', authorize, shows.create);
router.post('/open_mics', open_mics.create);
router.post('/open_mics/addnew', authorize, open_mics.createshow);

// delete requests
router.delete('/suggestions/:id', authorize, suggestions.delete);
router.delete('/shows/:id', authorize, shows.delete);
router.delete('/open_mics/:id', authorize, open_mics.delete);

// edit show
router.put('/shows/:id', authorize, shows.update);
router.put('/open_mics/:id', authorize, open_mics.update);

// Export the router
module.exports = router;
