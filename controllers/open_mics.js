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


module.exports.retrieve = function(request, response, next) {
    response.send(`GET /shows/${OpenMic.find(request.params)}`);

}