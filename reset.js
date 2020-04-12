// Script for setting up a database.
const mongoose = require('mongoose');
const connect = require('./db');
const Show = require('./models/shows');
const OpenMic = require('./models/open_mics');

// Connect to the database
connect();

// Model a collection of courses
const shows = [
  new Show({date: 'CS140', title: 'Introduction to Computer Programming', description: 'An introduction to programming using a high-level language. Assumes no prior knowledge of programming, and focuses on essential skills. Students learn to create programs ranging from practical utilities to simple games.'}),
  
];

// Model a collection of sections
const open_mics = [
  new OpenMic({course: 'CS140', day: 'M/W', time: '8:50 AM', instructor: 'Shafique Chaudhry'}),
 
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(courses.map(course => course.save())))
  .then(() => Promise.all(sections.map(section => section.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));