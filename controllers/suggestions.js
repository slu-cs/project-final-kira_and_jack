const Suggestion = require('../models/suggestions.js')

module.exports.index = function(request, response, next) {
    Suggestion.find()
        .then(suggestions => response.render('suggestions/index', {suggestions: suggestions}))
        .catch(error => next(error));
};

// new show request
module.exports.create = function(request, response, next) {
  Suggestion.create({
      date: Date.now(),
      name: request.body.name,
      description: request.body.description
    })
    .then(suggestion => response.status(201).send(suggestion.name))
    .catch(error => next(error));
};

// thanks
module.exports.thanks = function(request, response, next){
    response.render('suggestions/thanks');
};

// delete
module.exports.delete = function(request, response, next){
    Suggestion.findByIdAndDelete(request.params.id)
         .then(suggestion => suggestion ? response.status(200).end() : next())
         .catch(error => next(error));
};
