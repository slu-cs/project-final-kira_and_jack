const OpenMic = require('../models/open_mics.js');
const SignUp = require('../models/signups.js');

module.exports.index = function(request, response, next) {
  OpenMic.distinct('date')
    .then(events => response.redirect(`/open_mics/${events[0]}`))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    SignUp.find().where('date').equals(request.params.date),
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

// make openmic obj from signup obj
module.exports.create = function(request, response, next){
    SignUp.findByIdAndDelete(request.body.id)
        .then(function(signup){
            OpenMic.create({
                date: signup.date,
                time: signup.time,
                name: signup.name,
                act: signup.description
            });
        })
        .catch(error => next(error));
};

//revert openmic obj to signup obj
module.exports.delete = function(request, response, next){
    OpenMic.findByIdAndDelete(request.body.id)
        .then(function(signup){
            SignUp.create({
                date: signup.date,
                time: signup.time,
                name: signup.name,
                description: signup.act
            });
        })
        .catch(error => next(error));
};
