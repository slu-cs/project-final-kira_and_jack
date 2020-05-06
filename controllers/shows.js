const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
    Shows.find()
        .then(shows => response.render('shows/index', {shows: shows}))
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
    Shows.create({
            date: new Date(request.params.date + request.params.time),
            performers: request.params.performers,
            description: request.params.description,
            link: request.params.link,
            image: request.params.image
        })
      .then(data => response.status(201).send(data))
      .catch(error => next(error));
  };

// edit show
module.exports.update = function (request, response, next) {
    console.log(request.body.date + 'T' + request.body.time + ':00')
    Shows.findByIdAndUpdate(request.params.id, {
            date: Date.parse(request.body.date + 'T' + request.body.time + ':00'),
            performers: request.body.performers,
            description: request.body.description,
            link: request.body.link,
            image: request.body.image
        })
        .then(data => response.status(201).send(data))
        .catch(error => next(error));
  };

// delete
module.exports.delete = function(request, response, next){
    Shows.findByIdAndDelete(request.params.id)
         .then(suggestion => suggestion ? response.status(200).end() : next())
         .catch(error => next(error));
};
