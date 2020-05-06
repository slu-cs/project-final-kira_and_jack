const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'date'; // Default to sort by date

  Shows.find().sort(order)
    .then(shows => response.render('shows/index', {shows: shows, order: order}))
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    const query = Shows.findById(request.params.id);
    query.exec()
         .then(function(show) {
             if (show){
                 response.render('shows/edit', {show: show});
             }
            else {
                next(); // sorry no show on that day :(
            }
        })
        .catch(error => next(error));
};

// new show request
module.exports.create = function (request, response, next) {
    Shows.create(request.body)
      .then(data => response.status(201).send(data))
      .catch(error => next(error));
  };

// edit show
module.exports.update = function (request, response, next) {
    Shows.findByIdAndUpdate(request.params.id, request.body)
        .then(data => response.status(201).send(data))
        .catch(error => next(error));
  };

// delete
module.exports.delete = function(request, response, next){
    Shows.findByIdAndDelete(request.params.id)
         .then(suggestion => suggestion ? response.status(200).end() : next())
         .catch(error => next(error));
};
