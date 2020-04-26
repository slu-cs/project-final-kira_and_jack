
const Suggestion = require('../models/suggestions.js')
module.exports.index = function(request, response, next) {
    const queries = [
        Suggestion.find()
    ];
    Promise.all(queries)
        .then(suggestions => response.render('suggestions/index', {suggestions: suggestions}))
        .catch(error => next(error));
};

// new show request
module.exports.create = function(request, response, next) {
  Suggestion.create(request.body)
    .then(suggestion => response.status(201).send(suggestion.name))
    .catch(error => next(error));
};
