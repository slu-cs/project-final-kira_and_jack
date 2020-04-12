const OpenMic = require('../models/open_mics');


// module.exports.index = function(request, response, next) {
//   OpenMic.find('name')
//     .then(name => response.redirect(`/open_mics/${name}`))
//     .catch(error => next(error));
// };

// module.exports.retrieve = function(request, response, next) {
//     OpenMic.find('name')
//     .then
//   };


module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'name'; // Default to sort by course

  OpenMic.find().sort(order)
    .then(open_mic => console.log(open_mic))
    .catch(error => next(error));
};