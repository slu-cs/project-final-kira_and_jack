const OpenMic = require('../models/open_mics');


// GET /open_mics
module.exports.index = function(request, response, next) {
  OpenMic.distinct('date')
    .then(events => response.redirect(`/open_mics/${events[0]}`))
    .catch(error => next(error));
};
<<<<<<< HEAD

// GET /open_mics/:date
module.exports.retrieve = function(request, response, next) {
  const queries = [
    OpenMic.findOne(request.params),
    OpenMic.distinct('date')
  ];

  Promise.all(queries).then(function([date, events]) {
    if (date) {
      response.render('open_mics/index', {date: date, events: events});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
=======
>>>>>>> 6e491015b7230862a313ef1a25aab8d55ff8dad9
