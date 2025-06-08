const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  enrolledCourses: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
      completed: { type: Boolean, default: false }
    }
  ]
});
module.exports = mongoose.model('User', UserSchema);
