
const Suggestion = require('../models/suggestions.js')
module.exports.index = function(request, response, next) {
    response.render('suggestions/index');
};

// new show request
module.exports.create = function(request, response, next) {
  Suggestion.create(request.body)
    .then(suggestion => response.status(201).send(suggestion.name))
    .catch(error => next(error));
};
