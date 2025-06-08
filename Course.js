const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: [String], // Optional: array of content IDs or descriptions
});
module.exports = mongoose.model('Course', CourseSchema);
