const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');

// GET: Enrolled Courses with Completion Status
router.get('/my-courses/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('enrolledCourses.courseId');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const courses = user.enrolledCourses.map((entry) => ({
      courseId: entry.courseId._id,
      title: entry.courseId.title,
      description: entry.courseId.description,
      completed: entry.completed
    }));

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET: Course Detail
router.get('/course/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
