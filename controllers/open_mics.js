const OpenMic = require('../models/open_mics');


module.exports.index = function(request, response, next) {
  OpenMic.find('name')
    .then(name => response.redirect(`/open_mics/${name}`))
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next) {
    const queries = [
      OpenMic.findById(request.params.name),
    ];
  
    console.log(queries)
  };
