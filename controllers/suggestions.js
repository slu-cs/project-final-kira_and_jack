module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'date'; // Default to sort by date
  response.render('suggestions/index')
    .catch(error => next(error));
};
