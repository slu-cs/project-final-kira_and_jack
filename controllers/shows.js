const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
  Shows.distinct('date')
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    response.send(`GET /shows/${request.params.date}`);
};
