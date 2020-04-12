// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const OpenMic = new mongoose.Schema({
  date: {type: Date, required: true, match: /CS\d\d\d/},
  title: {type: String, maxlength: 100, trim: true},
  description: {type: String, maxlength: 1000, trim: true},
  prereqs: [{type: String, match: /CS\d\d\d/}]
});

// Clean up sections and prereqs when a course is deleted
Course.post('findOneAndDelete', function(course) {
  const queries = [
    mongoose.model('Section').deleteMany({course: course.id}),
    mongoose.model('Course').updateMany({prereqs: course.id}, {$pull: {prereqs: course.id}})
  ];
  Promise.all(queries).catch(error => next(error));
});

// Export the model
module.exports = mongoose.model('Course', Course);