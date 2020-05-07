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
    OpenMic.distinct('date'), 
    OpenMic.find().where('date').equals(request.params.date),
  ];

  Promise.all(queries).then(function([show, events,date]) {
    if (show.length >= 0) {
      response.render('open_mics/index', {show: show, events:events, date: date});
    } else {
      next();
    }
  }).catch(error => next(error));
};

// make a signup object
module.exports.create = function (request, response, next) {
  SignUp.create(request.body)
    .then(data => response.status(201).send(data))
    .catch(error => next(error));
};

// delete sign up object
module.exports.delete = function(request, response, next){
  SignUp.findByIdAndDelete(request.params.id)
      .then(suggestion => suggestion ? response.status(200).end() : next())
      .catch(error => next(error));
};


// update signup object
module.exports.update= function(request, response, next){
  SignUp.findByIdAndUpdate(request.params.id, {approved : request.body.approved}, {runValidators:true})
      .catch(error => next(error));
};

module.exports.createshow = function (request, response, next) {
  OpenMic.create({
      date: Date.parse(request.body.date + 'T' + request.body.time + ':00'),
  })
  .then(data => response.status(201).send(data))
  .catch(error => next(error));
};





