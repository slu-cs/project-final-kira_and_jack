const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'name'; // Default to sort by course

  Shows.find().sort(order)
    .then(shows => response.render('shows/index', {shows: shows, order: order}))
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    response.send(`${new Date(request.params.date)}`)
    Promise.all(queries).then(function(show) {
      if (show) {
        response.send(show)
      } else {
        next(); // No such course
      }
    }).catch(error => next(error));
};
