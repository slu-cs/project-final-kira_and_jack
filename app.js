// Server for a course catalog.
const express = require('express');
const router = require('./router');
const connect = require('./db');

// Connect to the database
connect();

// Create the server
const app = express();

// Configure the views
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

// Ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

// Log requests to the console
app.use(function(request, response, next) {
  console.log('--------------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next();
});

// Redirect from the home page
app.get('/', function(request, response) {
  response.render('index');
});

// Route content requests
app.use('/', router);

// Handle undefined routes
app.use(function(request, response) {
  console.log('Responded with 404');
  response.status(404).end();
});

// Handle other errors
app.use(function(error, request, response) {
  console.error(error.stack);
  response.status(500).send(error.message);
});



// Start the server
app.listen(3000);
console.log('Server is ready.');
