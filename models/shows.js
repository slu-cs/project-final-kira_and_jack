// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Show = new mongoose.Schema({
  date: {type: Date, required: true}, // date objects are a hassle
  performers: {type: String, maxlength: 240, trim: true, required: true},
  description: {type: String, maxlength: 1000, trim: true, required: false},
  link: {type: String, required: false},
  image: {type: String, required:false}
});

Show.methods.date_string = function(){
     const options = {weekday: 'long', month: 'long', day: 'numeric', hour12: true, hour:'numeric', minute:'numeric'};
     return this.date.toLocaleDateString("en-US", options);
  };

Show.methods.date_string_internal = function(){
    const options = {year:'long', month: 'numeric'};
    return this.date.getFullYear() + '-' + (this.date.getMonth() + 101 + '').slice(1,3) + '-' + (this.date.getDate() + 100 + '').slice(1,3) + 'T' + this.date.toTimeString().slice(0,5);
};

// Export the model
module.exports = mongoose.model('show', Show);
