module.exports.index = function(request, response) {
  response.send('GET /shows');
};

module.exports.retrieve = function(request, response){
    respnse.send('GET /shows/${request.params.date}');
};
