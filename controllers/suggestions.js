
const Suggestion = require('../models/suggestions.js')
module.exports.index = function(request, response, next) {
    response.render('suggestions/index');
};

// new show request
module.exports.create = function(request, response, next) {
  Suggestion.create(request.body)
    .then(course => response.status(201).send(course.id))
    .catch(error => next(error));
};
