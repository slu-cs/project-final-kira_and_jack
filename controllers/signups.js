const SignUp = require('../models/signups.js')
const OpenMic = require('../models/open_mics')

module.exports.index = function(request, response, next) {

  OpenMic.distinct('date')
    .then(dates => response.render('signups/index', {dates:dates}))
    .catch(error => next(error));
};


// new signup request
module.exports.create = function (request, response, next) {
  SignUp.create(request.body)
    .then(data => response.status(201).send(data.id))
    .catch(error => next(error));
};