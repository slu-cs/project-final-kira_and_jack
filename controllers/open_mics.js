const OpenMic = require('../models/open_mics.js');
const SignUp = require('../models/signups.js');

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
    if (show.length > 0) {
      response.render('open_mics/index', {show: show, events: events});
    } else {
      next();
    }
  }).catch(error => next(error));
};

module.exports.create = function(response, request, next){
    console.log(request.body);
    //SignUp.findById(request.body.id)
//        .then(foo => console.log(foo))
    //    .catch(error => next(error));
};
