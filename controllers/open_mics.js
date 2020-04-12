const OpenMic = require('../models/open_mics');


// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'name'; // Default to sort by course

  OpenMic.find().sort(order)
    .then(sections => response.render('sections/index', {names: names, order: order}))
    .catch(error => next(error));
};