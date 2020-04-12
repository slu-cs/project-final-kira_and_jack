const OpenMic = require('../models/open_mics');

module.exports.index = function(request, response) {
    response.send('GET /open_mics');
  };

module.exports.retrieve = function(request, response){
    response.send(`GET /open_mics/${request.params.date}`);
};


// GET /courses
module.exports.index = function(request, response, next) {
  OpenMic.find('date')
    .catch(error => next(error));
};
