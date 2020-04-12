const OpenMic = require('../models/open_mics.js')

module.exports.index = function(request, response, next) {
  OpenMic.distinct('date')
    .then(events => response.redirect(`/open_mics/${events[0]}`))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    OpenMic.find().where('date').equals(request.params.date),
    OpenMic.distinct('date')
  ];

  Promise.all(queries).then(function([show, events]) {
    if (show) {
      response.render('open_mics/index', {show: show, events: events});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
