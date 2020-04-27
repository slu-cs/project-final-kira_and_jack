const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'date'; // Default to sort by date

  Shows.find().sort(order)
    .then(shows => response.render('shows/index', {shows: shows, order: order}))
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    const query = Shows.find().where('date').equals(request.params.date);
    query.exec().
        then(function(show) {
            if (show.length !== 0){
                response.render('shows/show', {show: show[0]});
            }
            else {
                next(); // sorry no show on that day :(
            }
        })
        .catch(error => next(error));
};

// new show request
module.exports.create = function (request, response, next) {
    Show.create(request.body)
      .then(data => response.status(201).send(data))
      .catch(error => next(error));
  };
