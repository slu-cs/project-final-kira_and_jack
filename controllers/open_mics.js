const OpenMic = require('../models/open_mics.js')

module.exports.index = function(request, response, next) {
  OpenMic.find().distinct('date').exec()
    .then(
      function(events) {
        if (events.length !== 0){
            response.render('open_mics/index', {events: events})
        }
        else {
            next(); // sorry no show on that day :(
        }
    })
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    const query = OpenMic.find().where('date').equals(request.params.date);
    query.exec().
        then(function(event) {
            if (event.length !== 0){
                response.render('open_mics/event', {event: event[0]});
            }
            else {
                next(); // sorry no show on that day :(
            }
        })
        .catch(error => next(error));
};
