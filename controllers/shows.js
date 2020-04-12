module.exports.index = function(request, response) {
  response.send('GET /shows');
};

module.exports.retrieve = function(request, response){
    response.send(`GET /shows/${request.params.date}`);
};
