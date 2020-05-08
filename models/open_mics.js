// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const OpenMic = new mongoose.Schema({
  date: {type: Date, required: true}
});

OpenMic.methods.date_string = function(){
  const options = {weekday: 'long', month: 'long', day: 'numeric', hour12: true, hour:'numeric', minute:'numeric'};
  return this.date.toLocaleDateString("en-US", options);
};

// Export the model
module.exports = mongoose.model('OpenMic', OpenMic);
